const router = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

router.get('/cards', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((data) => {
      const cards = JSON.parse(data);
      res.status(200).json(cards);
    })
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
});

module.exports = router;
