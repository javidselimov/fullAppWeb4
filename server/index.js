const express = require("express");

const cors = require('cors');
const { default: Router } = require("./router/playlistRoutes");
const app = express();
require("dotenv").config();
const playlist = require("./router/playlistRoutes.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())





const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Are you ready");
});

app.get("/", playlist);
//  connecet db and read data endpoint


// app.post('/playlist', (req, res) => {
//     const {link,name,duration,genre,singer} = req.body
//     const command = `insert into musiclist(name,singer,duration,genre,link) values("${name}","${singer}","${duration}","${genre}","${link}")`;
//     conn.query(command, (err) => {
//         if (!err) {
//            return res.json({'created':true})
//         }
//         return res.send(err)
//    })
// })

// app.delete('/delete/:id', (_, res) => {
//   const command = `delete from musiclist where id=${parseInt(_.params.id)};`;
//   conn.query(command, (err) => {
//     if (!err) {
//       return res.status(200).send("deleted")
//     }
//     res.status(404).send(err)
//   })
// })




app.listen(PORT, (err) => {
  if (!err) console.log(`server is runnig on port - ${PORT}`);
});
