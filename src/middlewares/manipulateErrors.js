import mongoose from 'mongoose';
import BadRequest from '../Error/BadRequest.js';
import ValidateError from '../Error/ValidateError.js';
import ErrorBase from '../Error/ErrorBase.js';

// eslint-disable-next-line no-unused-vars
function manipulateErros(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    new BadRequest().sendError();
  }
  else if (error instanceof mongoose.Error.ValidationError) {
    new ValidateError(error).sendError(res);
  }
  else if (error instanceof ErrorBase) {
    error.sendError();
  }
  else {
    new ErrorBase().sendError(res);
  }
}

export default manipulateErros;