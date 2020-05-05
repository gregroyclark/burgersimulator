var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection(
  process.env.JAWSDB_URL ||
  {
  host: process.env.host,
  port: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;