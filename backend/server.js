const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const gameRoutes = require("./routes/gameRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/gameDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/games", gameRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});