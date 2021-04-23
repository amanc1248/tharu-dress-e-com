import express from "express";
import {
  authTailorUser,
  registerTailorUser,
  tailorSales,
} from "../controllers/tailorUserController.js";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();
router.get("/tailorSales", tailorSales);
router.post("/tailorsignin", authTailorUser);
router.post("/tailorregister", registerTailorUser);

export default router;
