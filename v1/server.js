import express from "express";
import { URI, PORT } from "./config/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import app from "./routes/index.js";

// === 1 - CREATE SERVER ===
const server = express();

// CONFIGURE HEADER INFORMATION
server.use(cors());
server.disable("x-powered-by");
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// === 2 - CONNECT DATABASE ===
mongoose.promise = global.Promise;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => console.log("Connected to database!")).catch((err) => console.log(err));

// === 4 - CONFIGURE ROUTES ===
server.use(app);

// === 5 - START UP SERVER ===
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));