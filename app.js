const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./.env/database");
const session = require("express-session");
const hostname = "0.0.0.0";

//configure express session
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "Token", resave: false, saveUninitialized: true }));

//connect to database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
try {
  db.once("open", () => {
    console.log("connected to db");
  });
} catch (error) {
  console.log("Error");
}
db.on("error", (err) => {
  console.log(console.log(err));
});
app.use(bodyParser.urlencoded({ extended: true })); //allow body-parser
//import routes
const dashboard = require("./routes/dashboard");
const login = require("./routes/login");
const equipment = require("./routes/equpment");
const user = require("./routes/user");
const department = require("./routes/deaprtment");

//Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); //set public dir for assests

//use routes
app.use("/", dashboard);
app.use("/login", login);
app.use("/equipment", equipment);
app.use("/user", user);
app.use("/department", department);

// Set the server name
app.set("serverName", "techfier");
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`App running on port ${port}`);
});
