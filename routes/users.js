const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const usersPath = path.join('data', 'users.json');

router.get('/users', (req, res) => {
  fs.readFile(usersPath)
    .then((data) => {
      const users = JSON.parse(data);
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
});
router.get('/users/:id', (req, res) => {
  fs.readFile(usersPath)
    .then((data) => {
      const users = JSON.parse(data);
      let user = {};
      const isUserId = users.some((e) => {
        user = e;
        return e._id === req.params.id;
      });
      if (!isUserId) {
        res.status(404);
        res.send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(user);
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
});

module.exports = router;
