import express from "express";
import path from "path";



const route = express
  .Router()

route
  .get("/", async (req, res) => {
    res.sendFile(path.resolve("../frontend/build/index.html"), "utf-8");
  })

export default route;