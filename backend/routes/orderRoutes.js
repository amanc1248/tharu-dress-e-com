import express from "express";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();

import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  markOrderAsDelivered,
} from "../controllers/orderController.js";

router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/markAsDelivered").put(markOrderAsDelivered);
router.route("/:orderId").get(protect, getOrderById);

export default router;
