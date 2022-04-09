import express from "express";

const route = express.Router();

route.get("/", async (req, res) => {
  res.render("about", { });
});

export default route;
