require("dotenv").config();
const app = require("./app");
const config = require("./app/config");
require("./app/config/db").connectDB();

app.listen(config.PORT, () => {
  console.log(`Server listening on ${config.PORT}`);
});
