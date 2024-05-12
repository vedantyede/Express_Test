import express from "express";

const app = express();

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
