const express = require("express");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController");
const homeController = require("../app/http/controllers/homeController");
const guest = require("./../app/http/middleware/guest");
const auth = require("./../app/http/middleware/auth");
const admin = require("./../app/http/middleware/admin");
const adminOrderController = require("../app/http/controllers/admin/adminOrderController");

const router = express.Router();

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

// Protected  Routes
router.route("/orders").post(auth, orderController().store);
router.route("/customer/orders").get(auth, orderController().index);

// Admin Routes
router.route("/admin/orders").get(admin, adminOrderController().index);

module.exports = router;
