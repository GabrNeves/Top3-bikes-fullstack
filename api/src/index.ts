import express from "express";
import dotenv from "dotenv";
import productRouter from "./routes/products";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use("/products", productRouter);

export default app