const { allMessage, addMessage } = require("../controllers/messageController");

const router = require("express").Router();

router.get("/", allMessage);
router.get("/new-message", addMessage);

module.exports = router;
