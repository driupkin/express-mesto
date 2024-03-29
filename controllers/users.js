const User = require('../models/user');
// GET /users
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};
// GET /users/:userId
module.exports.getUserId = (req, res) => {
  User.findOne({ _id: req.params.id }).orFail()
    .then((user) => {
      res.send(user);
    })
    .catch(() => {
      res.status(404).send({ message: 'Нет пользователя с таким id.' });
    });
};
// POST /users
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      return res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};
// PATCH /users/me
module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true })
    .then((me) => {
      console.log(me);
      res.status(200).send(me);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};
// PATCH /users/me/avatar
module.exports.updateAvatar = (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, req.body, { new: true })
    .then((avatar) => {
      res.status(200).send(avatar);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};
