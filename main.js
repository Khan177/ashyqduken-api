const express = require("express");
const app = express();
const phones = require("./products").phones;
const laptops = require("./products").laptops;
const products = require("./products").allItems;
const categories = require("./categories").categories;
const PORT = process.env.PORT;
console.log(products);
app.get("/", (req, res, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  res.json(products);
});
app.get("/phones", (req, res, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  res.json(phones);
});
app.get("/laptops", (req, res, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  res.json(laptops);
});
app.get("/categories", (req, res, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  res.json(categories);
});
app.listen(PORT);
