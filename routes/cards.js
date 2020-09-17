const router = require('express').Router();
const fs = require('fs').promises;

router.get('/cards', (req, res) => {
  fs.readFile('data/cards.json')
    .then((data) => {
      const cards = JSON.parse(data);
      res.status(200).json(cards);
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
});

module.exports = router;
