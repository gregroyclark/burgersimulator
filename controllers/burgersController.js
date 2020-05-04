var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.post("/api/burgers", function(req, res) {
  orm.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten 
  ], function(result){
    res.json({ id: result.insertId });
  });
});

router.get("/", function(req, res) {
  orm.selectAll(function(data) {
    let hbsObject = {
      burgers: data  
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function(req, res){
  var condition = req.params.id;

  console.log("condition", condition);

  orm.updateOne({
    eaten: req.body.eaten
  }, condition, function(result){
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  orm.delete(condition, function(result) {
    if (result.affectedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;