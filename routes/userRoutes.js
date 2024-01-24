const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

// Authentication
const authenticate = require("../middlewares/authentication");

// Endpoint
router.post("/register", userController.register);
router.post("/login", userController.login);

// Secure
router.get("/home", authenticate, userController.secure);

module.exports = router;
