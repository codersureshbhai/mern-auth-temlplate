import User from "../models/User.js";

export const getUsers = async (req, res) => {
  res.json({
    message: "Users API is working",
  });
};

export const getProfile = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json({
    user,
  });
};