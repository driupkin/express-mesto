const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});
router.get('/users/:id', (req, res) => {
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
});

module.exports = router;
