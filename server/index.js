const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000

app.get('/', (req,res) => {
    res.send('Are you ready')
})

app.listen(PORT, (err) => {
    if(!err) console.log(`server is runnig on port - ${PORT}`)
})