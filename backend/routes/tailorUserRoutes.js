import express from "express";
import { authTailorUser } from "../controllers/tailorUserController.js";
import { protect } from "../middleWare/authMiddleware.js";
const router = express.Router();
router.post("/tailorsignin", authTailorUser);

export default router;
