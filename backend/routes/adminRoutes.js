import express from "express";
import {
  getAdminDetails,
  getCustomersDetails,
  getEmployeeDetails,
  getTailorsDetails,
  totalCustomers,
} from "../controllers/adminController.js";
const router = express.Router();

router.route("/dashboard").get(getAdminDetails);
router.route("/totalCustomers").get(totalCustomers);
router.route("/allCustomers").get(getCustomersDetails);
router.route("/allTailors").get(getTailorsDetails);
router.route("/allEmployees").get(getEmployeeDetails);
export default router;
