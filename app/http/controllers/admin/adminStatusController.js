const Order = require("./../../../models/order.schema");

const adminStatusController = () => {
  return {
    update(req, res) {
      Order.updateOne(
        { _id: req.body.orderId },
        { status: req.body.status },
        (err, data) => {
          res.redirect("/admin/orders");
        }
      );
    },
  };
};

module.exports = adminStatusController;
