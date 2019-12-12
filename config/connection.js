var mysql = require("mysql");
var user_pwd = require("./db_credential");

// Set up MySQL connection.
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: user_pwd.user,
  password: user_pwd.password,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
