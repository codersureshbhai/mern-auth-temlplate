import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
dotenv.config();
import "./config/env.js";
import helmet from "helmet";
import validateEnv from "./config/env.js";

dotenv.config();

validateEnv();


const app = express();
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

connectDB();
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});