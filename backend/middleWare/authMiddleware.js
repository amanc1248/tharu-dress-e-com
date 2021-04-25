import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();
const protect = asyncHandler(async (req, res, next) => {
  console.log(req.headers.authorization);
  let customertoken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      customertoken = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(customertoken, process.env.JWT_SECRET);
      console.log("customertoken  " + customertoken);

      let sql =
        "select @uid :=`user_id`, first_name, last_name, email from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='customer';select customer_id from customer where user_id =@finaluid;";
      db.query(sql, [decoded.id], (err, result) => {
        if (result) {
          req.user = result;
          console.log(req.user);

          next();
        } else {
          res.status(404);
          res.json(err);
        }
      });
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, customertoken failed");
    }
  }
  if (!customertoken) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const tailorProtect = asyncHandler(async (req, res, next) => {
  console.log(req.headers.authorization);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("taiortoken  " + token);
      let sql =
        "select @uid :=`user_id`, first_name, last_name, email from dasa_user as var, (SELECT @uid := NULL) init_var where email=?;select @finaluid:= `user_id` from user_type, (SELECT @finaluid := NULL) init_var  where user_id =@uid AND type='tailor';select tailor_id from tailor where user_id =@finaluid;";
      db.query(sql, [decoded.id], (err, result) => {
        if (result) {
          req.user = result;
          console.log(req.user);

          next();
        } else {
          res.status(404);
          res.json(err);
        }
      });
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(404);
    throw new Error("Not authorized as an admin");
  }
};
export { protect, tailorProtect, isAdmin };
