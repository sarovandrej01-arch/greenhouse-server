const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.post("/update", (req, res) => {
  console.log("Received data:", req.body);

  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
