import prisma from "../DB/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Allowed Roles
const roles = ["RESCUE_TEAM", "DONOR", "VICTIM", "ADMIN"];

// Register Controller
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check role
    if (!roles.includes(role)) {
      return res.status(400).json({ msg: "Invalid role selected" });
    }

    // Check email exists
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role,
      },
    });
    console.log("User registered:", user);
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create Token
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return token and full user info
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,     // ✅ Add email here
        role: user.role.toLowerCase(), // optional: lowercase for frontend
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};