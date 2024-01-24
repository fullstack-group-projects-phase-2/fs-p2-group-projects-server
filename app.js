require("dotenv").config();

const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 3000;
const cors = require("cors");
const router = require("./routes/main");
const errorHandler = require("./middlewares/errorhandler");

// socket io
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
// end

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

// socket io
io.on("connection", (socket) => {
  console.log("new connection <<<>>>");
});
// end

httpServer.listen(port, () => {
  console.clear();
  console.log(`Example app listening on port ${port}`);
});
