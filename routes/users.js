const router = require('express').Router();
const { create } = require('domain');
const { getUsers, getUsersId } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUsersId);
// router.post('/users', createUsers);

module.exports = router;
