const mysql = require("mysql");
const dotenv = require("dotenv");

const connection = mysql.createConnection({
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