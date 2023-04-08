import express from 'express';
import dbUsers from './config/db.js';
import routes from './routes/index.js';
import manipulateErros from './middlewares/manipulateErrors.js';

dbUsers.on('error', console.log.bind(console, 'Erro de conexão'));
dbUsers.once('open', () => {
  console.log('conexão com o banco de feita com sucesso');
});


const app = express();

app.use(express.json());
routes(app);

//middlewares
app.use(manipulateErros);

export default app;