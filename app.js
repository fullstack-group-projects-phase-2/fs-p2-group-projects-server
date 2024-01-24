const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { User, Message } = require("./models");
const errorHandler = require("./middlewares/errorhandler");

// Routes path
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

// error handler
app.use(errorHandler);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/user", userRoutes);
app.use("/message", messageRoutes);

app.listen(port, () => {
  console.clear();
  console.log(`Example app listening on port ${port}`);
});
