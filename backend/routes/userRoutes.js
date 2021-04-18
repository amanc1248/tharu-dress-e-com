import express from "express";
import { authUser, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleWare/authMiddleware.js";
import { getUserProfile, registerUser } from "../controllers/userController.js";
const router = express.Router();
router.route("/").post(registerUser);
router.post("/signin", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
