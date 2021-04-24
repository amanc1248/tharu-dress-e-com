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
//@desc auth user and get token
//@route POST /api/users/login
//@access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='customer';select customer_id, password from customer where user_id =@finaluid;";
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      if (result[2][0] == null) {
        res.status(401).send({ message: "user not found" });
      } else {
        if (MatchPassword(password, result[2]["0"]["password"])) {
          res.json({
            firstName: result[0][0]["first_name"],
            lastName: result[0][0]["last_name"],
            email: result[0][0]["email"],
            phone: result[0][0]["phone"],
            userId: result[1]["0"]["@finaluid:= `user_id`"],
            customerId: result[2]["0"]["customer_id"],
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

//@desc get user profile
//@route GET api/users/profile
//@access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='customer';select @customerId:=`customer_id`, password from customer where user_id =@finaluid;SELECT @locId:=`location_id` from customer_location where customer_id = @customerId;SELECT city, street from location where location_id = @locId; ";

  db.query(sql, [req.user[0][0]["email"]], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      if (result) {
        console.log(result);
        res.json({
          firstName: result[0][0]["first_name"],
          lastName: result[0][0]["last_name"],
          email: result[0][0]["email"],
          phone: result[0][0]["phone"],
          userId: result[1]["0"]["@finaluid:= `user_id`"],
          customerId: result[2]["0"]["@customerId:=`customer_id`"],
          city: result[4]["0"]["city"],
          street: result[4]["0"]["street"],
        });
      } else {
        res.status(404);
        throw new Error("user not found");
      }
    }
  });
});

//@desc register a new user
//@route POST /api/users
//@access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const finalPassword = await bcrypt.hash(password, salt);
  let sql =
    "select @uid:=`user_id` from dasa_user as var, (SELECT @uid := NULL) init_var  where email=?;select type from user_type where user_id=@uid AND type='customer';";
  db.query(sql, [email], (err, result) => {
    if (err) {
      res.status(401).send({ message: "Please fill all the fields" });
    }
    if (result.length > 0) {
      if (result[1][0] != null) {
        res.status(401).send({ message: "customer already exists" });
        console.log(result);
        // no action needed
      } else if (result[0][0] != null) {
        // create customer with same user id👇👇
        // res.status(401).send({ message: "user exists but no customer" });
        let sql =
          "INSERT INTO user_type values(?, 'customer', 'active');select @customerCount:= count(*)+1 from customer; select @customerID:=concat('cus', @customerCount);INSERT INTO customer values (@customerID, ?, ?, current_date());select * from dasa_user where email=?; select customer_id from customer where user_id= ?;";
        db.query(
          sql,
          [
            result[0][0]["@uid:=`user_id`"],
            result[0][0]["@uid:=`user_id`"],
            finalPassword,
            email,
            result[0][0]["@uid:=`user_id`"],
          ],
          (err, result) => {
            console.log(result);
            if (result) {
              res.json({
                userId: result[4][0]["user_id"],
                firstName: result[4][0]["first_name"],
                lastName: result[4][0]["last_name"],
                email: result[4][0]["email"],
                phone: result[4][0]["phone"],
                customerId: result[5][0]["customer_id"],
                token: generateToken(result[4][0]["email"]),
              });
            }
          }
        );
      } else {
        // CREATE NEW USER👇👇
        console.log(result);
        console.log("User does not exist, no customer, no tailor, no employee");
        let sql =
          "select @userCount:= count(*)+1 from dasa_user;select @userID:=concat('u', @userCount);INSERT INTO dasa_user values(@userID, ?,?,?,?);INSERT INTO user_type values(@userID, 'customer','active');select @customerCount:= count(*)+1 from customer;select @customerID:=concat('cus', @customerCount);INSERT INTO customer values(@customerID,@userID,?, current_date());select * from dasa_user where email=?; select customer_id from customer where user_id= @userID;";
        db.query(
          sql,
          [first_name, last_name, email, phone, finalPassword, email],
          (err, result) => {
            if (result.length > 0) {
              res.json({
                userId: result[7][0]["user_id"],
                firstName: result[7][0]["first_name"],
                lastName: result[7][0]["last_name"],
                email: result[7][0]["email"],
                phone: result[7][0]["phone"],
                customerId: result[8][0]["customer_id"],
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
});

//@desc update user profile
//@route PUT /api/users/profile
//@access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='customer';select @customerId:=`customer_id` , password from customer where user_id =@finaluid;SELECT @locId:=`location_id` from customer_location where customer_id = @customerId;SELECT city, street from location where location_id = @locId; ";

  db.query(sql, [req.user[0][0]["email"]], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      if (result) {
        console.log("First RESULT");
        console.log(result);
        console.log(result[0][0]["first_name"]);
        console.log(result[3][0]["@locId:=`location_id`"]);

        let firstName = req.body.firstName || result[0][0]["first_name"];
        let lastName = req.body.lastName || result[0][0]["last_name"];
        let email = req.body.email || result[0][0]["email"];
        let phone = req.body.phone || result[0][0]["phone"];
        let city = req.body.city || result[4][0]["city"];
        let street = req.body.street || result[4][0]["street"];
        let password;
        if (req.body.password) {
          password = req.body.password || result[2][0]["password"];
        }

        // save to database
        let sql =
          "UPDATE dasa_user SET first_name = ?, last_name=?, email=?, phone=? WHERE email=?;SELECT user_id,first_name,last_name,email,phone from dasa_user WHERE email=?;select customer_id from customer where user_id= ?;UPDATE customer SET password=? where user_id=?;UPDATE location SET city=?,  street=? where location_id='loc1';";
        db.query(
          sql,
          [
            firstName,
            lastName,
            email,
            phone,
            req.user[0][0]["email"],
            email,
            result[1][0]["@finaluid:= `user_id`"],
            password,
            result[1][0]["@finaluid:= `user_id`"],
            city,
            street,
          ],
          (err, result) => {
            // if (err) {
            //   res.status(401).send({ message: err });
            // }
            console.log(result);
            if (result) {
              res.json({
                firstName: result[1][0]["first_name"],
                lastName: result[1][0]["last_name"],
                email: result[1][0]["email"],
                phone: result[1][0]["phone"],
                userId: result[1]["0"]["@finaluid:= `user_id`"],
                customerId: result[2]["0"]["customer_id"],
                token: generateToken(result[1][0]["email"]),
              });
            } else {
              res.status(401).send({ Message: err });
            }
          }
        );
        // give he response
      } else {
        res.status(404);
        throw new Error("user not found");
      }
    }
  });
});

//@desc update user address
//@route PUT /api/users/profile
//@access PUBLIC
const updateAddressBook = asyncHandler(async (req, res) => {
  let sql =
    "SELECT @locId:=`location_id` from customer_location where customer_id =?;SELECT city, street from location where location_id = @locId;";
});
export { authUser, getUserProfile, registerUser, updateUserProfile };
