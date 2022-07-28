import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./routes/products";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

if (process.env.DATABASE_URL) {
  mongoose.connect(process.env.DATABASE_URL, { dbName: "bikedb" });
}
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database."));

app.use(express.json());
app.use("/products", productRouter);

export default app