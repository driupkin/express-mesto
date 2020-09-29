const router = require('express').Router();
const { getCard, createCard, deleteCard } = require('../controllers/cards');

router.get('/cards', getCard);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);

module.exports = router;
