const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const session = require("express-session");
const path = require("path");
const config = require("./app/config");
const flash = require("express-flash");
const MongoStore = require("connect-mongo");

const app = express();

app.use(
  session({
    secret: config.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: MongoStore.create({
      mongoUrl: config.MONGO_URI,
      ttl: 24 * 60 * 60,
    }),
  })
);
app.use(flash());
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});
app.use(expressLayout);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/web"));

module.exports = app;
