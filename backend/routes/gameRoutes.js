const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Save game
router.post("/", async (req, res) => {
  const game = new Game(req.body);
  await game.save();
  res.json(game);
});

// Get all games
router.get("/", async (req, res) => {
  const games = await Game.find().sort({ createdAt: -1 });
  res.json(games);
});

module.exports = router;