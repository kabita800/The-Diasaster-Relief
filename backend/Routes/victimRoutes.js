import express from "express";
import { getVictims, deleteVictim, updateVictim, createVictim } from "../controllers/victimControllers.js";

const router = express.Router();
router.get("/", getVictims);
router.post("/", createVictim);
router.delete("/:id", deleteVictim);
router.put("/:id", updateVictim);

export default router;
