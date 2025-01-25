import express from "express";
import {
  GoogleLogin,
  Login,
  Register,
} from "../controllers/Auth.controller.js";

const AuthRoute = express.Router();

AuthRoute.post("/register", Register);
AuthRoute.post("/login", Login);
AuthRoute.post("/googlelogin", GoogleLogin);

export default AuthRoute;
