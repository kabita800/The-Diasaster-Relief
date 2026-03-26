import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import authRoutes from "./Routes/authRoutes.js";
import disasterRoutes from "./Routes/disasterRoutes.js";
import victimRoutes from "./Routes/victimRoutes.js";
import donorRoutes from "./Routes/donorRoutes.js";
import statsRoutes from "./Routes/statsRoutes.js";
import notificationRoutes from "./Routes/notificationRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/disasters", disasterRoutes);
app.use("/api/victims", victimRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/notifications", notificationRoutes);


app.get("/", (req, res) => res.send("Server is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
