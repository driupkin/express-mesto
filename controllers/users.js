const fs = require('fs').promises;
const path = require('path');
const User = require('../models/user');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

module.exports.getUsers = (req, res) => {
  fs.readFile(usersPath)
    .then((data) => {
      const users = JSON.parse(data);
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
};
module.exports.getUsersId = (req, res) => {
  fs.readFile(usersPath)
    .then((data) => {
      const users = JSON.parse(data);
      const user = users.find((item) => item._id === req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
};
