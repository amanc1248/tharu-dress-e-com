import asyncHandler from "express-async-handler";
import db from "../config/db.js";
//@desc fetch all products
//@route GET /api/products
//@access PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  let sql = "SELECT * FROM PRODUCT;";

  db.query(sql, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.json(result);
  });
});

//@desc fetch single products
//@route GET /api/products/:id
//@access PUBLIC
const getProductById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let sql =
    "select * from product where product_id = ?; select * from product_specification where product_id = ?;";
  db.query(sql, [id, id], (err, result) => {
    if (err) throw err;
    if (result) {
      res.json(result);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  });
});

export { getProducts, getProductById };
