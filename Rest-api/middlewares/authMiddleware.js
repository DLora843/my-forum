import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export default async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = await User.findById(decoded.id);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}
