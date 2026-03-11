import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import authRoutes from "./Routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Server is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
