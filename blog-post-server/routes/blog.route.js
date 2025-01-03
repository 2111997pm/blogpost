import express from "express";
import jwt from "jsonwebtoken";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../controllers/blog.controllers.js";

//middleware

const authenticate = async (req, res, next) => {
  const token = req.cookies?.access_token;
  if (!token) return res.status(403).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

const router = express.Router();

router.post("/", authenticate, createBlog);
router.get("/", authenticate, getAllBlogs);
router.get("/:id", authenticate, getBlogById);
router.put("/:id", authenticate, updateBlog);
router.delete("/:id", authenticate, deleteBlog);

export default router;
