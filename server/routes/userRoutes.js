import express from "express";
import {
  getUsers,
  getProfile,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/profile", authMiddleware, getProfile);

export default router;