import express from "express";
import prisma from "./DB/prisma.js";
const app = express();


const PORT = 5000;
app.get("/", (req,res) => {
    res.send("server is running")
});
app.listen(PORT, () => {
    console.log (`server is running at ${PORT}`);
    
});