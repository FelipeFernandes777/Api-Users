import ErrorBase from './ErrorBase.js';

class ValidateError extends ErrorBase {
  constructor(error) {
    const messageError = Object.values(error.erros);

    messageError.map(error => error.message).join('; ');

    super({ message: 'Falha ao validar o usuario' });
  }
}

export default ValidateError;