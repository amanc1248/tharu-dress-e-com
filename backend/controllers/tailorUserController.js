import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import db from "../config/db.js";
import generateToken from "../utils/generateToken.js";

// async function MatchPassword(enteredPassword, dbpassword) {
//   if (await bcrypt.compare(enteredPassword, dbpassword)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function MatchPassword(enteredPassword, dbPassword) {
  if (enteredPassword === dbPassword) {
    return true;
  } else {
    return false;
  }
}
//@desc auth tailoruser and get token
//@route POST /api/users/login
//@access PUBLIC
const authTailorUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='tailor';select tailor_id, password from tailor where user_id =@finaluid;";
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      if (result[2][0] == null) {
        res.status(401).send({ message: "Please fill all the fields" });
      } else {
        if (MatchPassword(password, result[2]["0"]["password"])) {
          res.json({
            firstName: result[0][0]["first_name"],
            lastName: result[0][0]["last_name"],
            email: result[0][0]["email"],
            phone: result[0][0]["phone"],
            userId: result[1]["0"]["@finaluid:= `user_id`"],
            tailorId: result[2]["0"]["tailor_id"],
            token: generateToken(result[0][0]["email"]),
          });
        } else {
          res.status(401).send({ message: "Invalid email or password" });
        }
      }
    } else {
      res.status(401).send({ message: "Please fill all the fields" });
    }
    // if (result && matchPassword(password, result)) {
    //   res.json({
    //     result,
    //   });
    // }
  });
});

export { authTailorUser };
