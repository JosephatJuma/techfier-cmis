const express = require("express");
const app = express();
const path = require("path");
//import routes
const dashboard = require("./routes/dashboard");
const login = require("./routes/login");

//Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); //set public dir for assests
//use routes
app.use("/", dashboard);
app.use("/login", login);

app.listen(20000, "localhost", () => {
  console.log("App running on port 20000");
});
