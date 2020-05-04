var orm = require("../config/orm.js");

//database functions
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    createOne: function(cols, vals, cb) {
      orm.createOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

    delete: function(condition, cb) {
      orm.delete("burger", condition, function(res) {
        cb(res);
      });
    }
  };

  //export database functions
  module.exports = burger;