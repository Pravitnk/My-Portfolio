import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"; // Import path to handle file paths

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

const __dirname = path.dirname(new URL(import.meta.url).pathname); // Get __dirname equivalent
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
