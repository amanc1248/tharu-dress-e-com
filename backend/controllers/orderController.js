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
    shippingAddress,
  } = req.body;
  if (1 === 0) {
    res.status(400).send({ message: "no order items" });
    return;
  } else {
    console.log(shippingAddress.city);
    console.log(shippingAddress.street);
    // function to save the order to the database
    function SaveToOrder(id) {
      // save the order to the database
      // the_order
      let sql =
        "select @orderCount:= count(*)+1 from the_order;select @orderId:=concat('od', @orderCount);INSERT INTO the_order values(@orderId,current_date(),?,?, null,0,'notdelivered','2021-04-24',?, ?,?);";
      db.query(
        sql,
        [shippingPrice, totalPrice, paymentMethod, customerId, id],
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
    }
    // check shipping address
    // if shipping address of entered city and street does not exist  then enter new shipping address
    // else insert the same shipping_id
    let shippingId;
    let shippingSql = `select shipping_id  from shipping_address where city='${shippingAddress.city}' and street='${shippingAddress.street}';`;
    db.query(shippingSql, (err, result) => {
      if (result[0] != null) {
        shippingId = result[0]["shipping_id"];
        SaveToOrder(shippingId);
        console.log(result);
      } else {
        let sql =
          "select @shippingCount:= count(*)+1 from shipping_address;select @shipping_id:=concat('sh_id', @shippingCount);";
        db.query(sql, (err, result) => {
          shippingId =
            result[1][0]["@shipping_id:=concat('sh_id', @shippingCount)"];
          SaveToOrder(shippingId);
        });
      }
    });

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
    "SELECT *, @oId:=`order_id`, @shId:=`sh_id` FROM the_order where order_id=?;select * from order_item join product on order_item.product_id = product.product_id where order_item.order_id = @oId;select * from shipping_address where shipping_id=@shId;";
  db.query(sql, [orderId, orderId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result) {
      console.log(result);
      res.json(result);
    }
  });
});

export { addOrderItems, getOrderById };
