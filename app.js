if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const cors = require("cors");
const router = require("./routes/main");
const errorHandler = require("./middlewares/errorhandler");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

module.exports = app;
