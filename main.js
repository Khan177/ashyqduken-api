const express = require("express");
const app = express();
const products = require("./products");
console.log(products);
app.get("/url", (req, res, next) => {
  res.json(products);
  console.log(products);
});
app.listen(3030, () => {
  console.log(parseInt("55058"));
});
