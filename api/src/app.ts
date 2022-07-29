import mongoose from "mongoose";
import app from './index'

const port = 9000;

if (process.env.DATABASE_URL) {
  mongoose.connect(process.env.DATABASE_URL, { dbName: "bikedb" });
};

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database."));

app.listen(port, () =>
console.log(
  `Server started and running...`
)
);