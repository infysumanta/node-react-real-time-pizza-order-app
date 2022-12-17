const express = require("express");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const homeController = require("../app/http/controllers/homeController");
const router = express.Router();
const guest = require("./../app/http/middleware/guest");
router.route("/").get(homeController().index);
router
  .route("/login")
  .get(guest, authController().login)
  .post(authController().postLogin);
router
  .route("/register")
  .get(guest, authController().register)
  .post(authController().postRegister);

router.route("/logout").post(authController().logout);

router.route("/cart").get(cartController().index);
router.route("/update-cart").post(cartController().update);

module.exports = router;
