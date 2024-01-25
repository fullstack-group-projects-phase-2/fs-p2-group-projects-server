const { allRoom, createRoom } = require("../controllers/roomController");

const router = require("express").Router();

router.get("/", allRoom);
router.post("/new-room", createRoom);

module.exports = router;
