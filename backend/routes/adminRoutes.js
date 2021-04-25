import express from "express";
import { getAdminDetails } from "../controllers/adminController.js";
const router = express.Router();

router.route("/dashboard").get(getAdminDetails);
export default router;
