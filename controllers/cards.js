const Card = require('../models/card');

module.exports.getCard = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(() => {
      res.status(500).send({ messege: 'Ошибка чтения файла.' });
    });
};
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((cards) => res.status(200).send(cards))
    .catch((err) => {
      res.status(400).send(err.messege);
    });
};
module.exports.deleteCard = (req, res) => {
  Card.findOneAndDelete(req.params.cardId)
    .then((cards) => res.status(200).send(cards))
    .catch(() => {
      res.status(404).send({ messege: 'Карточка с таким id не найдена.' });
    });
};
