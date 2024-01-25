const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello!");
});

router.use("/users", require("./userRoutes"));
router.use("/messages", require("./messageRoutes"));
router.use("/rooms", require("./room"));

module.exports = router;
