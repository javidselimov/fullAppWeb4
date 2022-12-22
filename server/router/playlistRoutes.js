const express =  require('express');
const { getAllplaylist, createPlaylist, deletePlaylist } = require('../controllers/playlistControllers');

const Router = express.Router();

Router.get("/playlist", getAllplaylist);
Router.post("/playlist", createPlaylist);
Router.delete("/delete/:id", deletePlaylist);

module.exports = Router;
