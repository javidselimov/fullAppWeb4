const conn = require('../db')

// get all musics
const getAllplaylist = (req, res) => {
    const command = `select * from musiclist`;
    
  
  conn.query(command, (err, data) => {
    if (!err) {
      return res.status(200).json(data);
    }
    res.status(404).send("Error not found");
  });
};


// create musics
const createPlaylist = (req, res) => {
  const { link, name, duration, genre, singer } = req.body;
  const command = `insert into musiclist(name,singer,duration,genre,link) values("${name}","${singer}","${duration}","${genre}","${link}")`;
  conn.query(command, (err) => {
    if (!err) {
      return res.json({ created: true });
    }
    return res.send(err);
  });
};


// delete music
const deletePlaylist =  (req, res) => {
    const command = `delete from musiclist where id=${parseInt(req.params.id)};`
    console.log(req.params)
  conn.query(command, (err) => {
    if (!err) {
      return res.status(200).send("deleted")
    }
    res.status(404).send(err)
  })
}


module.exports = {
    getAllplaylist,
    createPlaylist,
    deletePlaylist
}