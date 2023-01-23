const Order = require("./../../../models/order.schema");
const User = require("./../../../models/user.schema");
const Menu = require("./../../../models/menu.schema");
const adminOrderController = () => {
  return {
    async index(req, res) {
      const totalOrder = await Order.countDocuments();
      const totalUser = await User.countDocuments();
      const totalMenu = await Menu.countDocuments();
      const total = {
        totalOrder,
        totalUser,
        totalMenu,
      };
      return res.render("admin/index", total);
    },
    async products(req, res) {
      return res.render("admin/index");
    },
    async users(req, res) {
      return res.render("admin/index");
    },
    async order(req, res) {
      const orders = await Order.find({ status: { $ne: "completed" } }, null, {
        sort: { createdAt: -1 },
      })
        .populate("customerId", "-password")
        .exec((err, orders) => {
          if (req.xhr) {
            return res.json(orders);
          } else {
            return res.render("admin/order");
          }
        });
    },
  };
};

module.exports = adminOrderController;
