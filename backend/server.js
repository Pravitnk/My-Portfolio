import { app } from "./app.js";
import dotevn from "dotenv";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";

dotevn.config({ path: "./backend/config/config.env" });

// function to connect DB to Server
connectDB();

//connecting cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
