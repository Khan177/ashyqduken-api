const express = require("express");
const app = express();
const phones = require("./products").phones;
const laptops = require("./products").laptops;
const products = require("./products").allItems;
const PORT = process.env.PORT;
console.log(products);
app.get("/", (req, res, next) => {
  res.json(products);
});
app.get("/phones", (req, res, next) => {
  res.json(phones);
});
app.get("/laptops", (req, res, next) => {
  res.json(laptops);
});
app.listen(PORT);
