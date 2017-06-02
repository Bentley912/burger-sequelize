var express = require('express');
var router = express.Router();
var db = require("../models")


router.get("/", function(req,res){
     db.Burger.findAll({}).then(function(dbBurger){
         console.log(dbBurger);
         res.render('index', {burgers:dbBurger}); 
     })    
});

router.post("/", function(req, res) {
 db.Burger.create({
     name:req.body.burger_name,
     devoured: req.body.devoured
 }).then(function(dbBurger){
      res.redirect("/");
     })
});

router.put("/:id", function(req,res){
  db.Burger.update({
      devoured:true },
      {
        where: {id:req.params.id}

  }).then(function(dbBurger){
      res.redirect("/");

  })
      
})


module.exports = router; 