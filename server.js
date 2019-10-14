//Dependencies
const express = require("express");
const path = require("path");

//Sets up Express app
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Points server to routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});