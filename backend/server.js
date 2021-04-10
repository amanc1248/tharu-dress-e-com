import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import db from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleWare/middleWare.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("hello");
  next();
});

app.use("/api/products", productRoutes);
app.use(notFound);

app.use(errorHandler);
// main route
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(PORT, console.log(`Server running in  on port ${PORT}`.yellow.bold));
