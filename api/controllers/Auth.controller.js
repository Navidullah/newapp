import bcryptjs from "bcryptjs";
import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      //user already registered
      return next(handleError(409, "User already registered"));
    }
    // Hash the password
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);
    //const hashedPassword = bcryptjs.hashSync(password);
    //new user

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ success: true, message: "Registration Succesful" });
  } catch (err) {
    next(handleError(500, err.message));
  }
};
export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(handleError(404, "Invalid User"));
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return next(handleError(401, "Invalid Password"));
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.JWT_SECRET
    );
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });
    res.status(200).json({
      success: true,
      user,
      message: "Login successful.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
export const GoogleLogin = async (req, res, next) => {
  try {
    const { name, email, avatar } = req.body;
    let user;
    user = await User.findOne({ email });
    if (!user) {
      const password = Math.random().toString();
      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = bcryptjs.hashSync(password, salt);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        avatar,
      });
      user = await newUser.save();
    }
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.JWT_SECRET
    );
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });
    res.status(200).json({
      success: true,
      user,
      message: "Login successful.",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
