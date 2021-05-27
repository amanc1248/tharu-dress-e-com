import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import db from "../config/db.js";
import generateToken from "../utils/generateToken.js";

//@desc register a new user
//@route POST /api/users
//@access PUBLIC
const registerEmployee = asyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,

    phone,
    email,
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
              password,
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
              password,
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
                  tailortoken: generateToken(result[4][0]["email"]),
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
