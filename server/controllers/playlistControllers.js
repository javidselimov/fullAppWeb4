


const getAllplaylist = (req, res) => {
  const command = `select * from musiclist`;
  conn.query(command, (err, data) => {
    if (!err) {
      return res.status(200).json(data);
    }
    res.status(404).send("Error not found");
  });
};


module.exports = {
    getAllplaylist
}