import express from "express";
import {
  authTailorUser,
  registerTailorUser,
  tailorSales,
  tailorOrders,
  tailorProducts,
} from "../controllers/tailorUserController.js";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();
router.route("/tailorSales/:id").get(tailorSales);
router.route("/tailorOrders/:id").get(tailorOrders);
router.route("/tailorProducts/:id").get(tailorProducts);
router.post("/tailorsignin", authTailorUser);
router.post("/tailorregister", registerTailorUser);

export default router;
