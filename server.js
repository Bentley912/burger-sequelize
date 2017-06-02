
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var port = process.env.PORT || 8080;

//set up app

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgercontroller.js");
app.use("/", routes);

db.sequelize.sync({force:true}).then(function(){
    app.listen(port, function(){
        console.log("Listening on port %s", port);
    })
})

