import express from "express";
import {
  getAdminDetails,
  getCustomersDetails,
  getTailorsDetails,
  totalCustomers,
} from "../controllers/adminController.js";
const router = express.Router();

router.route("/dashboard").get(getAdminDetails);
router.route("/totalCustomers").get(totalCustomers);
router.route("/allCustomers").get(getCustomersDetails);
router.route("/allTailors").get(getTailorsDetails);
export default router;
