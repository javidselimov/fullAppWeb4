const mysql = require("mysql");


const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "12345",
  database: "web4",
});

conn.connect((err) => {
  if (!err) console.log("db is connected");
});