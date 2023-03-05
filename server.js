const express = require("express");
const { config } = require("dotenv");

config();

const app = express();

const PORT = process.env.PORT;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("hello");
});
app.get("/test", (req, res) => {
  res.render("test");
});

app.get("/apples", (req, res) => {
  const apples = [
    {
      name: "iPhone",
      price: "1000",
    },
    {
      name: "IPAD",
      price: "1400",
    },
    {
      name: "iMAc",
      price: "3000",
    },
    {
      name: "iWatch",
      price: "340",
    },
  ];

  res.status(200).json({
    apples,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
