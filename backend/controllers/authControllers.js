import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../DB/prisma.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    const hashedPassword = await bycrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return res
      .status(201)
      .json({
        message: "User created successfully",
        success: true,
        user: newUser,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
