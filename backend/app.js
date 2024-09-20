import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

const corsOptions = {
  origin: [
    "https://my-portfolio-frontend-a6v3.onrender.com",
    "http://localhost:4000",
    "*",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

import { userRouter } from "./routes/User.js";
app.use("/api/v1", userRouter);
