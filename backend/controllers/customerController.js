import asyncHandler from "express-async-handler";
import db from "../config/db.js";

//@desc fetch single customer
//@route GET /api/customer/:id
//@access PUBLIC
const getCustomerDetailsById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let sql =
    "select @uId:=`user_id` from customer where customer_id=?; select * from dasa_user where user_id=@uId; select * from the_order where customer_id=?;";
  db.query(sql, [id, id], (err, result) => {
    if (err) throw err;
    if (result) {
      console.log(result);
      res.json({
        firstName: result[1][0]["first_name"],
        lastName: result[1][0]["last_name"],
        email: result[1][0]["email"],
        phone: result[1][0]["phone"],
        orders: result[2],
      });
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  });
});

export { getCustomerDetailsById };
