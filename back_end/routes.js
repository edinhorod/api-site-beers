const express = require('express');
const authMiddleware = require("./src/middlewares/auth");

const UserController = require('./src/controllers/UserController');

const routes = express.Router();

routes.post('/register', UserController.register);
routes.post('/authenticate', UserController.authenticate);

routes.use(authMiddleware);

routes.post('/me', UserController.me);

module.exports = routes;