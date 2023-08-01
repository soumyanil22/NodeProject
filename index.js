const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("Hello, World");
});

app.listen(3000, async () => {
  console.log("listening on Port 3000");
});
