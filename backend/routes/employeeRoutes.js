import express from "express";
import {
  authEmployeeUser,
  employeeCustomers,
  employeeProductOrders,
  registerEmployee,
} from "../controllers/employeeControllers.js";

const router = express.Router();
router.post("/employeeRegister", registerEmployee);
router.post("/employeeSignin", authEmployeeUser);
router.route("/employeeOrderProducts/:id").get(employeeProductOrders);
router.route("/employeeCustomers/:id").get(employeeCustomers);
export default router;
