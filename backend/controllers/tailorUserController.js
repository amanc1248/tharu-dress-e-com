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
//@route POST /api/tailor/tailorsignin
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

//@desc register a new user
//@route POST /api/users
//@access PUBLIC
const registerTailorUser = asyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    city,
    street,
    noEmployees,
    password,
  } = req.body;
  console.log(
    first_name,
    last_name,
    email,
    phone,
    city,
    street,
    noEmployees,
    password
  );
  if (
    first_name &&
    last_name &&
    email &&
    phone &&
    city &&
    street &&
    noEmployees &&
    password
  ) {
    const salt = await bcrypt.genSalt(10);
    const finalPassword = await bcrypt.hash(password, salt);
    let sql =
      "select @uid:=`user_id` from dasa_user as var, (SELECT @uid := NULL) init_var  where email=?;select type from user_type where user_id=@uid AND type='tailor';";
    db.query(sql, [email], (err, result) => {
      if (err) {
        res.status(401).send({ message: "Please fill all the fields" });
      }
      if (result.length > 0) {
        console.log(result);
        if (result[1][0] != null) {
          res.status(401).send({ message: "tailor already exists" });
        } else if (result[0][0] != null) {
          console.log("user exists but no tailor");
          let sql =
            "INSERT INTO user_type values(?,'tailor','active');SELECT @tailorCount:=count(*)+1 from tailor; SELECT @tailorId:=concat('tail',@tailorCount);INSERT INTO tailor values (@tailorId,?,?, current_date(),'0','tailImage',?);SELECT @locCount:=count(*)+1 from location; SELECT @locationId:=concat('loc',@locCount);INSERT INTO location values(@locationId, ?,?);INSERT INTO tailor_location values(@tailorId, @locationId);select * from dasa_user where email=?; select tailor_id from tailor where user_id= ?;SELECT * from location where location_id=@locationId;";
          db.query(
            sql,
            [
              result[0][0]["@uid:=`user_id`"],
              result[0][0]["@uid:=`user_id`"],
              finalPassword,
              noEmployees,
              city,
              street,
              email,
              result[0][0]["@uid:=`user_id`"],
            ],
            (err, result) => {
              if (result) {
                res.json(result);
              }
            }
          );
        } else {
          console.log(
            "taior does not exist, no customer, no tailor, no employee"
          );
          let sql =
            "select @userCount:= count(*)+1 from dasa_user;select @userID:=concat('u', @userCount);INSERT INTO dasa_user values(@userID, ?,?,?,?);INSERT INTO user_type values(@userID, 'tailor','active');select @tailorCount:= count(*)+1 from tailor;select @tailorID:=concat('tail', @tailorCount);INSERT INTO tailor values(@tailorID,@userID,?, current_date(),'0','tailImage',?);SELECT @locCount:=count(*)+1 from location; SELECT @locationId:=concat('loc',@locCount);INSERT INTO location values(@locationId, ?,?);INSERT INTO tailor_location values(@tailorId, @locationId);select * from dasa_user where email=?; select tailor_id from tailor where user_id= @userID;SELECT * from location where location_id=@locationId";
          db.query(
            sql,
            [
              first_name,
              last_name,
              email,
              phone,
              finalPassword,
              noEmployees,
              city,
              street,
              email,
            ],
            (err, result) => {
              if (result.length > 0) {
                console.log(result);
                res.json({
                  userId: result[11][0]["user_id"],
                  firstName: result[11][0]["first_name"],
                  lastName: result[11][0]["last_name"],
                  email: result[11][0]["email"],
                  phone: result[11][0]["phone"],
                  tailorId: result[12][0]["tailor_id"],
                  locationId: result[13][0]["location_id"],
                  city: result[13][0]["city"],
                  street: result[13][0]["street"],
                  token: generateToken(result[4][0]["email"]),
                });
              }
            }
          );
        }
      } else {
        res.status(401).send({ message: "Please fill all the fields" });
      }
    });
  } else {
    res.status(401).send({ message: "Please fill all the fields" });
  }
});

export { authTailorUser, registerTailorUser };
