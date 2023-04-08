import mongoose from 'mongoose';

mongoose.connect(process.env.STRING_CONEXAO_DB);

let dbUsers = mongoose.connection;

export default dbUsers;