import express from 'express';
import userRoute from './Users.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'Cadastro Usuarios' });
  });

  app.use(
    express.json(),
    userRoute
  );
};

export default routes;