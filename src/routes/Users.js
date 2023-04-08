import express from 'express';
import User from '../controllers/UsersController.js';

const route = express.Router();

route
  .get('/usuarios', User.getUsers)
  .post('/usuarios', User.registerUsers)
  .put('/usuarios/:id', User.updateUsers)
  .delete('/usuarios/:id', User.deleteUsers);


export default route;