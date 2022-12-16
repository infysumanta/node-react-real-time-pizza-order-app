const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(expressLayout);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/web"));

module.exports = app;
