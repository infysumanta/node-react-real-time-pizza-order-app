const express = require("express");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController");
const homeController = require("../app/http/controllers/homeController");
const guest = require("./../app/http/middleware/guest");
const auth = require("./../app/http/middleware/auth");
const admin = require("./../app/http/middleware/admin");
const adminOrderController = require("../app/http/controllers/admin/adminOrderController");
const adminStatusController = require("../app/http/controllers/admin/adminStatusController");

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
router.route("/customer/orders/:id").get(auth, orderController().show);

// Admin Routes
router.route("/admin").get(admin, adminOrderController().index);
router.route("/admin/orders").get(admin, adminOrderController().order);
router.route("/admin/order/status").post(admin, adminStatusController().update);

module.exports = router;
