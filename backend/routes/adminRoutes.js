import express from "express";
import {
  getAdminDetails,
  getCustomersDetails,
  getEmployeeDetails,
  getProductOrderDetails,
  getTailorsDetails,
  totalCustomers,
} from "../controllers/adminController.js";
const router = express.Router();

router.route("/dashboard").get(getAdminDetails);
router.route("/totalCustomers").get(totalCustomers);
router.route("/allCustomers").get(getCustomersDetails);
router.route("/allTailors").get(getTailorsDetails);
router.route("/allEmployees").get(getEmployeeDetails);
router.route("/allProductOrders").get(getProductOrderDetails);
export default router;
