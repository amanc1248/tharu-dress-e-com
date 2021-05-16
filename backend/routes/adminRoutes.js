import express from "express";
import {
  getAdminDetails,
  getCustomersDetails,
  totalCustomers,
} from "../controllers/adminController.js";
const router = express.Router();

router.route("/dashboard").get(getAdminDetails);
router.route("/totalCustomers").get(totalCustomers);
router.route("/allCustomers").get(getCustomersDetails);
export default router;
