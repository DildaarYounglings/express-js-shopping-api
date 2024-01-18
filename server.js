// initializing express js //
const express = require("express");
const app = express();
const port = 3000;
// add CORS middleware //
// routes and data //
app.get("/", (req, res) => {
  res.send('<p style="background-color:black;color:white">Hello World!</p>');
});
app.get("/api/products", (req, res) => {
  res.send([
    {
      productName: "banana",
      productCategory: "fruit",
      price: 10,
      quantity: 12,
      Comments: [
        { username: "dildaar", content: "they have great quality bananas" },
      ],
    },
    {
      productName: "apple",
      productCategory: "fruit",
      price: 5,
      quantity: 12,
      Comments: [
        { username: "dildaar", content: "they have great quality apples" },
      ],
    },
    {
      productName: "peach",
      productCategory: "fruit",
      price: 15,
      quantity: 12,
      Comments: [
        { username: "dildaar", content: "they have great quality peaches" },
      ],
    },
    {
      productName: "pear",
      productCategory: "fruit",
      price: 10,
      quantity: 12,
      Comments: [
        { username: "dildaar", content: "they have great quality oranges" },
      ],
    },
    {
      productName: "orange",
      productCategory: "pear",
      price: 5,
      quantity: 12,
      Comments: [
        { username: "dildaar", content: "they have great quality pears" },
      ],
    },
    {
      productName: "strawberry",
      productCategory: "fruit",
      price: 15,
      quantity: 12,
      Comments: [
        {
          username: "dildaar",
          content: "they have great quality strawberies",
        },
      ],
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
