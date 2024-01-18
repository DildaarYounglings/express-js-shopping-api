// initializing express js //
const express = require("express");
const app = express();
const port = 3000;
const allCheckoutProducts = [];
const allShopProducts = [
  {
    productName: "banana",
    productCategory: "fruit",
    price: 10,
    quantity: 12,
    content: "fresh, delicious,and potasium goodness",
    Comments: [
      { username: "dildaar", content: "they have great quality bananas" },
    ],
  },
  {
    productName: "apple",
    productCategory: "fruit",
    price: 5,
    quantity: 12,
    content:
      "fresh, delicious,granny smith golden apples and a source of cyanide for people",
    Comments: [
      { username: "dildaar", content: "they have great quality apples" },
    ],
  },
  {
    productName: "peach",
    productCategory: "fruit",
    price: 15,
    quantity: 12,
    content: "fresh, delicious,soft peaches and they're divine",
    Comments: [
      { username: "dildaar", content: "they have great quality peaches" },
    ],
  },
  {
    productName: "pear",
    productCategory: "fruit",
    price: 10,
    quantity: 12,
    content: "fresh, delicious,soft pears get it before the other guy ",
    Comments: [
      { username: "dildaar", content: "they have great quality oranges" },
    ],
  },
  {
    productName: "orange",
    productCategory: "pear",
    price: 5,
    quantity: 12,
    content:
      "fresh, delicious,and the practicaly the only fruit on this list that is a color",
    Comments: [
      { username: "dildaar", content: "they have great quality pears" },
    ],
  },
  {
    productName: "strawberry",
    productCategory: "fruit",
    price: 15,
    quantity: 12,
    content:
      "fresh, delicious,strawberries, and a nice fruit in general that is or isn't used in strawberry flavoured products",
    Comments: [
      {
        username: "dildaar",
        content: "they have great quality strawberies",
      },
    ],
  },
];
// add CORS middleware //
// routes and data //

app.get("/", (req, res) => {
  res.send('<p style="background-color:black;color:white">Hello World!</p>');
});
app.get("/api/products", (req, res) => {
  res.send(allShopProducts);
});
app.post("/api/allCheckoutProducts",(req,res) => {
  res.send("Product Added to checkout");
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
