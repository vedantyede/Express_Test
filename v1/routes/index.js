import express from "express";
import Auth from "./auth.js";

const app = express();

app.use("/v1/auth", Auth);

app.disable("x-powered-by");

app.get("/v1", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to the API homepage!",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
});
export default app;
