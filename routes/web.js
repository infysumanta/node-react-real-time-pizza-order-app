const express = require("express");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const homeController = require("../app/http/controllers/homeController");
const router = express.Router();

router.route("/").get(homeController().index);
router.route("/cart").get(cartController().cart);
router.route("/login").get(authController().login);
router.route("/register").get(authController().register);

module.exports = router;
