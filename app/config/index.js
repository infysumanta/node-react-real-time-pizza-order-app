module.exports = {
  PORT: process.env.PORT || 4000,
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://localhost/node-react-real-time-pizza-order-app",
  COOKIE_SECRET: process.env.COOKIE_SECRET || "thisismysecret",
};
