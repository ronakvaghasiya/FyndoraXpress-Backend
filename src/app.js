// src/app.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to E-Commerce API 🚀");
});

module.exports = app;
