import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URL, { dbName: "mern-app" })
  .then(() => {
    console.log("Database is connected now");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err.message);
  });

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
