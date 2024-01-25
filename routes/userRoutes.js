const router = require("express").Router();
const { register, login, allUser } = require("../controllers/userControllers");

// Authentication
const authenticate = require("../middlewares/authentication");

// Endpoint
router.get("/", allUser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
