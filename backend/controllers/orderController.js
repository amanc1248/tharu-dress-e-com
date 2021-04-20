import asyncHandler from "express-async-handler";
import db from "../config/db.js";
//@desc Create new order
//@route POST /api/order
//@access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    totalPrice,
    shippingPrice,
    paymentMethod,
    customerId,
  } = req.body;
  if (1 === 0) {
    res.status(400).send({ message: "no order items" });
    return;
  } else {
    // save the order to the database
    // the_order
    let sql =
      "select @orderCount:= count(*)+1 from the_order;select @orderId:=concat('od', @orderCount);INSERT INTO the_order values(@orderId,current_date(),?,?, null,0,'notdelivered','2021-04-24',?, ?);";
    db.query(
      sql,
      [shippingPrice, totalPrice, paymentMethod, customerId],
      (err, result) => {
        if (err) {
          throw err;
        }
        if (result) {
          //  save particular order_item to the database
          console.log(result);
          console.log(result[1][0]["@orderId:=concat('od', @orderCount)"]);
          let orderId = result[1][0]["@orderId:=concat('od', @orderCount)"];
          let finalsql = "";
          {
            orderItems.map(
              (item) =>
                (finalsql =
                  finalsql +
                  `INSERT INTO order_item VALUES('${orderId}', '${item.productId}', '${item.qty}','${item.length}', '${item.width}','notassigned',0);`)
            );
          }
          db.query(finalsql, (err, result) => {
            if (err) {
              throw err;
            }
            if (result) {
              res.json({ orderId: orderId });
            }
          });
        }
      }
    );

    // order_item
  }
});

//@desc get order by id
//@route GET /api/order/:orderId
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  // const order = await Order.findById(req.params.id).populate(
  //   "user",
  //   "name email"
  // );
  console.log(req.params.orderId);
  let orderId = req.params.orderId;
  let sql =
    "SELECT * FROM the_order where order_id=?; select * from order_item where order_id=?";
  db.query(sql, [orderId, orderId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      res.json(result);
    }
  });
});

export { addOrderItems, getOrderById };
