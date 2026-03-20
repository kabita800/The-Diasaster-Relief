import express from "express";
import { getDisasters, deleteDisaster, updateDisaster } from "../controllers/disasterControllers.js";

const router = express.Router();

// Get all disasters
router.get("/", getDisasters);
router.delete("/:id", deleteDisaster);
router.put("/:id", updateDisaster);

export default router;
