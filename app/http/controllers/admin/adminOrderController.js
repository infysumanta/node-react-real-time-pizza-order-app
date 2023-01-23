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
    async menus(req, res) {
      const menus = await Menu.find();
      return res.render("admin/menus", { menus });
    },
    async users(req, res) {
      const users = await User.find();
      return res.render("admin/users", { users });
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
