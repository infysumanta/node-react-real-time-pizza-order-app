const express = require("express");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const homeController = require("../app/http/controllers/homeController");
const router = express.Router();

router.route("/").get(homeController().index);
router.route("/login").get(authController().login);
router.route("/register").get(authController().register);
router.route("/cart").get(cartController().index);
router.route("/update-cart").post(cartController().update);

module.exports = router;
