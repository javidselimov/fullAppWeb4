const express = require("express");
const cors = require('cors');
require("dotenv").config();

const playlist = require("./router/playlistRoutes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.PORT || 5000;

app.use("/", playlist);

app.listen(PORT, (err) => {
  if (!err) console.log(`server is runnig on port - ${PORT}`);
});
