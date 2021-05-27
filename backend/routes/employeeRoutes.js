import express from "express";
import {
  authEmployeeUser,
  employeeCustomers,
  employeeProductOrders,
  getEmployeeProfile,
  registerEmployee,
  updateEmployeeProfile,
} from "../controllers/employeeControllers.js";
import { employeeProtect } from "../middleWare/authMiddleware.js";

const router = express.Router();
router.post("/employeeRegister", registerEmployee);
router.post("/employeeSignin", authEmployeeUser);
router.route("/employeeOrderProducts/:id").get(employeeProductOrders);
router.route("/employeeCustomers/:id").get(employeeCustomers);

router
  .route("/profile")
  .get(employeeProtect, getEmployeeProfile)
  .put(employeeProtect, updateEmployeeProfile);
export default router;
