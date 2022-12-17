const Order = require("./../../../models/order.schema");
const adminOrderController = () => {
  return {
    async index(req, res) {
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
