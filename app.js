require("dotenv").config();
<<<<<<< HEAD
=======

>>>>>>> 178ac9b2dc664f63a7764a5d425e6e2f6e659729
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes/main");
const errorHandler = require("./middlewares/errorhandler");
const port = process.env.port;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.clear();
  console.log(`Example app listening on port ${port}`);
});
