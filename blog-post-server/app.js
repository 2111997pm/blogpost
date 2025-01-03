import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import blogRoutes from "./routes/blog.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

//MongoDb url for database

mongoose
  .connect(process.env.MONGODB_URL) 
  .then(() =>
    app.listen(3000, () =>
      console.log("Server running on http://localhost:3000")
    )
  )
  .catch((error) => console.log("Error connecting to database:", error));
