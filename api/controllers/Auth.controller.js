import bcryptjs from "bcryptjs";
import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";

export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      //user already registered
      next(handleError(409, "User already registered"));
    }
    const hashedPassword = bcryptjs.hashSync(password);
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
export const Login = async (req, res) => {};
