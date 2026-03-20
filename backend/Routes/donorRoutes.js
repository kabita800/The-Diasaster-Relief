import express from "express";
import { getDonors, deleteDonor, updateDonor, createDonor } from "../controllers/donorControllers.js";

const router = express.Router();
router.get("/", getDonors);
router.post("/", createDonor);
router.delete("/:id", deleteDonor);
router.put("/:id", updateDonor);

export default router;
