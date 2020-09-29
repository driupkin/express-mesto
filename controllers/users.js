const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
};
module.exports.getUserId = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      res.send(user);
    })
    .catch(() => {
      res.status(404).send({ messege: 'Нет пользователя с таким id.' });
    });
};
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};
