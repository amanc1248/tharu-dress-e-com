import express from "express";
import {
  authEmployeeUser,
  registerEmployee,
} from "../controllers/employeeControllers.js";

const router = express.Router();
router.post("/employeeRegister", registerEmployee);
router.post("/employeeSignin", authEmployeeUser);
export default router;
