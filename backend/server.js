const express = require("express");
const app = express();
const prisma = require("./DB/prisma");

const PORT = 5000;
app.get("/", (req,res) => {
    res.send("server is running")
});
app.listen(PORT, () => {
    console.log (`server is running at ${PORT}`);
    
});