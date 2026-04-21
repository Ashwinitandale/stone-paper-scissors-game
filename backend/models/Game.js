const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  rounds: [
    {
      p1Choice: String,
      p2Choice: String,
      winner: String,
    },
  ],
  winner: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Game", gameSchema);