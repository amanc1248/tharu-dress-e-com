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

//@desc tailorsales
//@route GET /api/tailor/tailorSales
//@access PRIVATE
const tailorSales = asyncHandler(async (req, res) => {
  const tailorId = req.params.id;

  let todaysDetailsSql =
    "select COUNT(the_order.order_id) as todays_orders,SUM(the_order.total_price) as todays_revenue, COUNT(DISTINCT the_order.customer_id) as todays_customer from the_order join order_through on the_order.order_id  =  order_through.order_id where order_through.tailor_id=? AND the_order.date_time=current_date();";
  let totalDetailsSql =
    "select COUNT(the_order.order_id) as total_orders,SUM(the_order.total_price) as total_revenue, COUNT(DISTINCT the_order.customer_id) as total_customers from the_order join order_through on the_order.order_id  =  order_through.order_id where order_through.tailor_id=?;";
  let totalProducts =
    "select  COUNT(product_id) as total_tailor_products from product where tailor_id=?;";
  let recentOrders =
    "select the_order.order_id,the_order.date_time,the_order.status,the_order.customer_id,the_order.total_price,dasa_user.first_name  FROM the_order join order_through on the_order.order_id = order_through.order_id  join customer on customer.customer_id = the_order.customer_id join dasa_user  on dasa_user.user_id = customer.user_id where order_through.tailor_id=? ORDER BY the_order.date_time DESC limit 7;";
  let sql = todaysDetailsSql + totalDetailsSql + totalProducts + recentOrders;
  db.query(sql, [tailorId, tailorId, tailorId, tailorId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json({
        todaysOrders: result[0][0]["todays_orders"],
        todaysRevenue: result[0][0]["todays_revenue"],
        todaysCustomer: result[0][0]["todays_customer"],
        totalOrders: result[1][0]["total_orders"],
        totalRevenue: result[1][0]["total_revenue"],
        totalCustomer: result[1][0]["total_customers"],
        totalTailorProducts: result[2][0]["total_tailor_products"],
        recentOrders: result[3],
      });
    }
  });
});

//@desc tailororders
//@route GET /api/tailor/tailororders
//@access PUBLIC
const tailorOrders = asyncHandler(async (req, res) => {
  const tailorId = req.params.id;

  let sql =
    "select the_order.order_id,the_order.date_time,the_order.status,the_order.customer_id,the_order.total_price,dasa_user.first_name  FROM the_order join order_through on the_order.order_id = order_through.order_id  join customer on customer.customer_id = the_order.customer_id join dasa_user  on dasa_user.user_id = customer.user_id where order_through.tailor_id=?";
  db.query(sql, [tailorId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

//@desc tailorproducts
//@route GET /api/tailor/tailorproducts
//@access PUBLIC
const tailorProducts = asyncHandler(async (req, res) => {
  const tailorId = req.params.id;

  let sql = "select * from product where tailor_id=?;";
  db.query(sql, [tailorId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

//@desc tailorcustomers
//@route GET /api/tailor/tailorcustomers
//@access PUBLIC
const tailorCustomers = asyncHandler(async (req, res) => {
  const tailorId = req.params.id;

  let sql =
    "select distinct customer.customer_id,dasa_user.user_id,dasa_user.first_name,dasa_user.last_name,dasa_user.email,dasa_user.phone from customer join  order_through on customer.customer_id=order_through.customer_id join dasa_user on dasa_user.user_id=customer.user_id where order_through.tailor_id = ?;";
  db.query(sql, [tailorId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

//@desc tailoremployees
//@route GET /api/tailor/tailoremployees
//@access PUBLIC
const tailorEmployees = asyncHandler(async (req, res) => {
  const tailorId = req.params.id;

  let sql =
    "select employee.employee_id,dasa_user.first_name, dasa_user.last_name, dasa_user.email, dasa_user.phone, employee.date_time,employee.status from employee join  dasa_user on employee.user_id = dasa_user.user_id where employee.tailor_id=?;";
  db.query(sql, [tailorId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

//@desc get tailor profile
//@route GET api/tailor/profile
//@access PRIVATE
const getTailorProfile = asyncHandler(async (req, res) => {
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='tailor';select @tailorId:=`tailor_id`, password from tailor where user_id =@finaluid;SELECT @locId:=`location_id` from tailor_location where tailor_id = @tailorId;SELECT city, street from location where location_id = @locId; ";

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
          tailorId: result[2]["0"]["@tailorId:=`tailor_id`"],
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

//@desc update tailor profile
//@route PUT /api/tailor/profile
//@access PRIVATE
const updateTailorProfile = asyncHandler(async (req, res) => {
  let sql =
    "select @uid :=`user_id`, first_name, last_name, email, phone from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='tailor';select @tailorId:=`tailor_id` , password from tailor where user_id =@finaluid;SELECT @locId:=`location_id` from tailor_location where tailor_id = @tailorId;SELECT city, street from location where location_id = @locId; ";

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
          "UPDATE dasa_user SET first_name = ?, last_name=?, email=?, phone=? WHERE email=?;SELECT user_id,first_name,last_name,email,phone from dasa_user WHERE email=?;select tailor_id from tailor where user_id= ?;UPDATE tailor SET password=? where user_id=?;UPDATE location SET city=?,  street=? where location_id='loc1';";
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
                tailorId: result[2]["0"]["tailor_id"],
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
export {
  authTailorUser,
  registerTailorUser,
  tailorSales,
  tailorOrders,
  tailorProducts,
  tailorEmployees,
  tailorCustomers,
  getTailorProfile,
  updateTailorProfile,
};
