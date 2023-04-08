import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String
  },
  nome: {
    type: String,
    required: [true, 'Campo nome é obrigatorio']
  },
  email: {
    type: String,
    required: [true, 'Campo email é obrigatorio']
  },
  idade: {
    type: Number,
    required: [true, 'Campo idade é obrigatorio']
  }
});

const users = mongoose.model('users', userSchema);

export default users;