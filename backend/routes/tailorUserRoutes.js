import express from "express";
import {
  authTailorUser,
  registerTailorUser,
  tailorSales,
  tailorOrders,
  tailorProducts,
  tailorEmployees,
  tailorCustomers,
  getTailorProfile,
  updateTailorProfile,
} from "../controllers/tailorUserController.js";
import { tailorProtect } from "../middleWare/authMiddleware.js";
const router = express.Router();
router.route("/tailorSales/:id").get(tailorSales);
router.route("/tailorOrders/:id").get(tailorOrders);
router.route("/tailorProducts/:id").get(tailorProducts);
router.route("/tailorCustomers/:id").get(tailorCustomers);
router.route("/tailorEmployees/:id").get(tailorEmployees);

router
  .route("/profile")
  .get(tailorProtect, getTailorProfile)
  .put(tailorProtect, updateTailorProfile);

router.post("/tailorsignin", authTailorUser);
router.post("/tailorregister", registerTailorUser);

export default router;
