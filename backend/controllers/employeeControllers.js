import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import db from "../config/db.js";
import generateToken from "../utils/generateToken.js";

function MatchPassword(enteredPassword, dbPassword) {
  if (enteredPassword === dbPassword) {
    return true;
  } else {
    return false;
  }
}
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
    tailorStoreId,
    password,
    confirmPassword,
  } = req.body;

  if (
    first_name &&
    last_name &&
    phone &&
    email &&
    city &&
    street &&
    tailorStoreId &&
    password &&
    confirmPassword
  ) {
    let sql =
      "select @uid:=`user_id` from dasa_user as var, (SELECT @uid := NULL) init_var  where email=?;select type from user_type where user_id=@uid AND type='employee';";
    db.query(sql, [email], (err, result) => {
      if (err) {
        res.status(401).send({ message: "Please fill all the fields" });
      }
      if (result.length > 0) {
        console.log(result);
        if (result[1][0] != null) {
          res.status(401).send({ message: "employee already exists" });
        } else if (result[0][0] != null) {
          console.log("user exists but no employee");
          let sql1 = "INSERT INTO user_type values(?,'employee','inactive');";
          let sql2 =
            "SELECT @employeeCount:=count(*)+1 from employee; SELECT @employeeId:=concat('emp',@employeeCount);";
          let sql3 =
            "INSERT INTO employee values (@employeeId,?,?, current_date(),'0','free','complete',?);";
          let sql4 =
            "SELECT @locCount:=count(*)+1 from location; SELECT @locationId:=concat('loc',@locCount);";
          let sql5 =
            "INSERT INTO location values(@locationId, ?,?);INSERT INTO employee_location values(@employeeId, @locationId);select * from dasa_user where email=?; select employee_id from employee where user_id= ?;SELECT * from location where location_id=@locationId;";
          let finalSql = sql1 + sql2 + sql3 + sql4 + sql5;
          db.query(
            finalSql,
            [
              result[0][0]["@uid:=`user_id`"],
              result[0][0]["@uid:=`user_id`"],
              password,
              tailorStoreId,
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
            "select @userCount:= count(*)+1 from dasa_user;select @userID:=concat('u', @userCount);INSERT INTO dasa_user values(@userID, ?,?,?,?);INSERT INTO user_type values(@userID, 'employee','active');select @employeeCount:= count(*)+1 from employee;select @employeeID:=concat('emp', @employeeCount);INSERT INTO employee values(@employeeID,@userID,?, current_date(),'0','free','complete',?);SELECT @locCount:=count(*)+1 from location; SELECT @locationId:=concat('loc',@locCount);INSERT INTO location values(@locationId, ?,?);INSERT INTO employee_location values(@employeeId, @locationId);select * from dasa_user where email=?; select employee_id from employee where user_id= @userID;SELECT * from location where location_id=@locationId";
          db.query(
            sql,
            [
              first_name,
              last_name,
              email,
              phone,
              password,
              tailorStoreId,
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
                  employeeId: result[12][0]["employee_id"],
                  locationId: result[13][0]["location_id"],
                  city: result[13][0]["city"],
                  street: result[13][0]["street"],
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

//@desc auth employee
//@route POST /api/employee/employeesignin
//@access PUBLIC
const authEmployeeUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='employee';select employee_id, password from employee where user_id =@finaluid;";

  console.log(email);
  console.log(password);
  if (email && password) {
    db.query(sql, [email], (err, result) => {
      if (err) {
        res.status(401).send({ message: err });
      }
      if (result.length > 0) {
        if (result[2][0] == null) {
          res.status(401).send({ message: "User does not exist" });
          // res.json({ result });
        } else {
          if (MatchPassword(password, result[2]["0"]["password"])) {
            res.json({
              firstName: result[0][0]["first_name"],
              lastName: result[0][0]["last_name"],
              email: result[0][0]["email"],
              phone: result[0][0]["phone"],
              userId: result[1]["0"]["@finaluid:= `user_id`"],
              employee_id: result[2]["0"]["employee_id"],
            });
          } else {
            res.status(401).send({ message: "Invalid email or password" });
          }
        }
      }
    });
  } else {
    res.status(401).send({ message: "Please fill all the fields" });
  }
});
export { registerEmployee, authEmployeeUser };
