import express from "express";
import { register, login } from "../controllers/authControllers.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import prisma from "../DB/prisma.js";

const router = express.Router();

// Register and Login
router.post("/register", register);
router.post("/login", login);

// Get current logged-in user
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id }, // set in authenticateToken
      select: { id: true, name: true, email: true, role: true },
    });

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;