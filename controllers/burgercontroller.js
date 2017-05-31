var express = require('express');
var router = express.Router();
var db = require("../models")


router.get("/", function(req,res){
     db.Burger.findAll({}).then(function(dbBurger){
         console.log(data);
         res.render('index', {burgers:data}); 
     })
     
});

router.post("/", function(req, res) {
 db.Burger.create({
     name:req.body.name,
     devoured: req.body.devoured
 }).then(function(dbBurger){
      res.redirect("/");
     })
});

router.put("/:id", function(req,res){
  var condition = "id=" + req.params.id;
  burgers.update({
    devoured: req.body.devoured },
    condition, function(){
      res.redirect("/");
  })
})


module.exports = router; 