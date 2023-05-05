const express = require("express");
const app = express();

//import routes
const dashboard = require("./routes/dashboard");
//use routes
app.use("/", dashboard);

app.listen(20000, "localhost", () => {
  console.log("App running on port 20000");
});
