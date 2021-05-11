import express from "express";
import {
  getAdminDetails,
  totalCustomers,
} from "../controllers/adminController.js";
const router = express.Router();

router.route("/dashboard").get(getAdminDetails);
router.route("/totalCustomers").get(totalCustomers);
export default router;
