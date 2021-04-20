import express from "express";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();

import { addOrderItems, getOrderById } from "../controllers/orderController.js";

router.route("/").post(protect, addOrderItems);
router.route("/:orderId").get(protect, getOrderById);

export default router;
