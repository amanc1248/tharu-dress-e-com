import express from "express";
import {
  authTailorUser,
  registerTailorUser,
  tailorSales,
  tailorOrders,
} from "../controllers/tailorUserController.js";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();
router.route("/tailorSales/:id").get(tailorSales);
router.route("/tailorOrders/:id").get(tailorOrders);
router.post("/tailorsignin", authTailorUser);
router.post("/tailorregister", registerTailorUser);

export default router;
