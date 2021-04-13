import express from "express";
import {
  getProductById,
  getProducts,
  getProductSpecificatonById,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
router.route("/specification/:id").get(getProductSpecificatonById);
export default router;
