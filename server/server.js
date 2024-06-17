const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// * CONFIG

dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 8001;

// * DATABASE

connectDB();

// * START THE SERVER

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
