const express = require("express");
const app = express();
const products = require("./products");
const PORT = process.env.PORT;
console.log(products);
app.get("/", (req, res, next) => {
  res.json(products);
  console.log(products);
});
app.listen(PORT);
