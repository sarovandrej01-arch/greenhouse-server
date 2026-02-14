const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let lastData = {};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.post("/update", (req, res) => {
  lastData = req.body;
  console.log("Received:", lastData);
  res.json({ status: "ok" });
});

app.get("/status", (req, res) => {
  res.json(lastData);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
