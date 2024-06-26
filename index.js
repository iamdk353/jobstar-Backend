// imports
import express from "express";
import AuthRouter from "./Routers/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import jobRoutes from "./Routers/jobRoutes.js";
import cookieParser from "cookie-parser";
import whoami from "./Routers/whoAmI.js";

// assignments
const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/users";
//middlewears
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", AuthRouter);
app.use("/api/verify", whoami);
app.use("/api/job", jobRoutes);
//connection
mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log("connected to DB");
      console.log("connected to server");
    });
  })
  .catch((err) => {
    console.log("error in connecting to db");
  });
