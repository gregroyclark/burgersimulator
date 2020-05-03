var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
   burger.all(function(data) {
     let hbsObject = {
       burgers: data  
     };
     console.log(hbsObject);
     res.render("index", hbsObject);
   });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger", "eaten"
  ], [
    req.body.burger, req.body.eaten 
  ], function(result){
    res.json({ id: result.insertId });
  });
});

module.exports = router;