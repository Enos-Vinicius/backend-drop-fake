const express = require('express');
const multer  = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.Store);
routes.get('/boxes/:id', BoxController.show);

routes.post('/boxes/:id/files', multer(multerConfig).single('file') ,FileController.Store);

//GET(BUSCAR)/POST(INSERIR)/PUT(EDITAR)/DELETE(DELETAR)

module.exports = routes;