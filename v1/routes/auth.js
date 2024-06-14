import express from "express";
import { Login, Register } from "../controllers/auth.js";
import validateInput from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router();

//Register route -- POST request

router.post(
  "/register",
  check("email", "Please enter a valid email address")
    .isEmail()
    .normalizeEmail(),
  check("password", "Password must be at least 6 characters long")
    .notEmpty()
    .isLength({
      min: 6,
    }),
  check("firstName", "Firstname must be at least 2 characters long")
    .not()
    .isEmpty()
    .trim(),
  check("lastName", "Lastname must be at least 2 characters long")
    .not()
    .isEmpty()
    .trim(),
  validateInput,
  Register
);

// Login route -- POST request
router.post(
  "/login",
  check("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  check("password").not().isEmpty().withMessage("Password is required"),
  validateInput,
  Login
);

export default router;
