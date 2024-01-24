const express = require("express");
const router = express.Router();
const messageController = require("../controllers/userControllers");

// Endpoint

// Authentication
const authenticate = require("../middlewares/authentication");
