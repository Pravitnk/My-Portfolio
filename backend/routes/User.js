import express from "express";
import {
  addProjects,
  addYoutube,
  addtimeline,
  contact,
  deleteProjects,
  deleteYouTube,
  deletetimeline,
  getuser,
  login,
  logout,
  myProfile,
  updateUser,
} from "../controller/User.js";
import { isAutheticated } from "../middlewares/auth.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getuser);

userRouter.route("/me").get(isAutheticated, myProfile);

userRouter.route("/admin/update").put(isAutheticated, updateUser);

userRouter.route("/admin/add/timeline").post(isAutheticated, addtimeline);

userRouter.route("/admin/add/youtube").post(isAutheticated, addYoutube);

userRouter.route("/admin/add/projects").post(isAutheticated, addProjects);

userRouter.route("/admin/timeline/:id").delete(isAutheticated, deletetimeline);

userRouter.route("/admin/youtube/:id").delete(isAutheticated, deleteYouTube);

userRouter.route("/admin/projects/:id").delete(isAutheticated, deleteProjects);

userRouter.route("/contacts").post(contact);
