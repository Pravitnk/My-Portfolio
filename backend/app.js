import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"; 

const _dirname = path.resolve();

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

app.use(express.static(path.join(_dirname, "/Front_End/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "Front_End", "dist", "index.html"));
});
