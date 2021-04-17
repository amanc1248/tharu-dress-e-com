import express from "express";
import { authUser } from "../controllers/userController.js";
import { protect } from "../middleWare/authMiddleware.js";
import { getUserProfile, registerUser } from "../controllers/userController.js";
const router = express.Router();
router.route("/").post(registerUser);
router.post("/signin", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
