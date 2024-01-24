const router = require("express").Router();
const { register, login, secure } = require("../controllers/userControllers");

// Authentication
const authenticate = require("../middlewares/authentication");

// Endpoint
router.post("/register", register);
router.post("/login", login);

// Secure
router.get("/home", authenticate, secure);

module.exports = router;
