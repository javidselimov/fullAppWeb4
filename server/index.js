const express = require("express");
const mysql = require("mysql");
const cors = require('cors')
const app = express();
require("dotenv").config();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "12345",
  database: "web4",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app



const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Are you ready");
});

//  connecet db and read data endpoint



app.get('/playlist', (req, res) => {
    const command = `select * from musiclist`;
    conn.query(command, (err,data) => {
        if (!err) {
            return res.status(200).json(data);
        }
        res.status(404).send("Error not found")
    })
})

app.post('/playlist', (req, res) => {
    const {link,name,duration,genre,singer} = req.body
    const command = `insert into musiclist(name,singer,duration,genre,link) values("${name}","${singer}","${duration}","${genre}","${link}")`;
    conn.query(command, (err) => {
        if (!err) {
           return res.json({'created':true})
        }
        return res.send(err)
   })
})


conn.connect((err) => {
    if(!err) console.log("db is connected")
})

app.listen(PORT, (err) => {
  if (!err) console.log(`server is runnig on port - ${PORT}`);
});
