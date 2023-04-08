import ErrorBase from './ErrorBase.js';

class Error404 extends ErrorBase {
  constructor(message = 'Falha ao encontrar requisição') {
    super(message, 404);
  }
}

export default Error404;