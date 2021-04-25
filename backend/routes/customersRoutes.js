import express from "express";
import { getCustomerDetailsById } from "../controllers/customerController.js";
const router = express.Router();

router.route("/:id").get(getCustomerDetailsById);
export default router;
