import asyncHandler from "express-async-handler";
import db from "../config/db.js";

//@desc get store details
//@route GET api/admin/
//@access PRIVATE
const getAdminDetails = asyncHandler(async (req, res) => {
  let sql1 =
    "select sum(total_price) as totalSales, count(order_id) as orders,count(distinct customer_id) as customers from the_order;";
  let sql2 =
    "select count(tailor_id)as totalTailors from tailor;select count(employee_id) as totalEmployees from employee;select count(product_id) as totalProducts from product;";
  let sql3 =
    "select * from the_order ORDER BY the_order.date_time DESC limit 20;";
  let sql = sql1 + sql2 + sql3;

  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result) {
      console.log(result);
      res.json({
        totalSales: result[0][0]["totalSales"],
        orders: result[0][0]["orders"],
        customers: result[0][0]["customers"],
        totalTailors: result[1][0]["totalTailors"],
        totalEmployees: result[2][0]["totalEmployees"],
        totalProducts: result[3][0]["totalProducts"],
        recentOrders: result[4],
      });
    }
  });
});

//@desc totalcustomers
//@route GET /api/admin/totalcustomers
//@access PUBLIC
const totalCustomers = asyncHandler(async (req, res) => {
  let sql =
    "select distinct customer.customer_id,dasa_user.user_id,dasa_user.first_name,dasa_user.last_name,dasa_user.email,dasa_user.phone from customer join  dasa_user on dasa_user.user_id=customer.user_id ;";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

//@desc all customer details
//@route GET api/admin/
//@access PRIVATE
const getCustomersDetails = asyncHandler(async (req, res) => {
  let sql1 =
    "select CONCAT(dasa_user.first_name , ' ', dasa_user.last_name) as name, customer.date_time as dateJoined, count(the_order.customer_id) as totalOrders, sum(the_order.total_price) as totalPurchased,  the_order.customer_id,location.city as Location from the_order ";
  let sql2 = "join customer on customer.customer_id=the_order.customer_id ";
  let sql3 = "join dasa_user on dasa_user.user_id=customer.user_id ";
  let sql4 =
    "join customer_location on customer_location.customer_id=the_order.customer_id ";
  let sql5 =
    "join location on location.location_id = customer_location.location_id ";
  let sql6 = "group by the_order.customer_id;";
  let finalSql = sql1 + sql2 + sql3 + sql4 + sql5 + sql6;

  db.query(finalSql, (err, result) => {
    if (err) throw err;
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

export { getAdminDetails, totalCustomers, getCustomersDetails };
