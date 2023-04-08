import users from '../models/Users.js';

class User {
  static getUsers = async (req, res, next) => {
    try {
      const user = await users.find();

      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  };

  static registerUsers = async (req, res, next) => {
    let createdUser = new users(req.body);

    try {
      const User = await createdUser.save();

      res.status(201).send(User.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static updateUsers = async (req, res, next) => {
    try {
      const { id } = req.params;

      const locateUser = await users.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send(locateUser);
    } catch (err) {
      next(err);
    }
  };

  static deleteUsers = async (req, res, next) => {

    const { id } = req.params;

    try {
      if (id !== null) {
        await users.findByIdAndDelete(id);

        res.status(200).send({ message: 'Usuario foi removido com sucesso' });
      } else {
        res.status(200).send({ message: 'Passe um valor para o campo' });
      }
    } catch (err) {
      next(err);
    }
  };
}

export default User;