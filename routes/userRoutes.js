const router = require("express").Router();
const { register, login } = require("../controllers/userControllers");

// Authentication
const authenticate = require("../middlewares/authentication");

// Endpoint
router.post("/register", register);
router.post("/login", login);

module.exports = router;
