import User from "../models/User.js";
import bcrypt from "bcrypt";
/**
 * @route POST v1/auth/register
 * @desc Registers a user
 * @access Public
 */

export async function Register(req, res) {
  // get required variables from request body
  // using es6 object destructing
  const { firstName, lastName, email, password } = req.body;
  try {
    // create an instance of a user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }
    // save new user into the database
    const saveUser = await newUser.save();
    const { role, ...user_data } = saveUser._doc;
    res.status(201).json({
      status: "success",
      data: [user_data],
      message:
        "Thank you for registering with us. Your account has been successfully created.",
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
      // message: err.message,
    });
  }
  res.end();
}

export async function Login(req, res) {
  const { email, password } = req.body;
  // get required variables from request body
  // using es6 object destructing
  try {
    const user = await User.findOne({ email }).select("+password");
    // if user not exist
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "User does not exist",
      });
    }
    // if user exist
    // validate password
    if (user.password !== password) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid password",
      });
    }
    // return user info except password
    const { pass, ...user_data } = user._doc;
    res.status(200).json({
      status: "success",
      data: [user_data],
      message: "Login successful",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "fail",
      code: 500,
      data: [],
      message: "Internal server error",
      // message: err.message,
    });
  }
  res.end();
}
