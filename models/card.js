const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (url) => {
        const regExp = /https?:\/\/\S+$/i;
        return regExp.test(url);
      },
      message: 'не правильно введен URL!',
    },
  },
  owner: {
    type: mongoose.ObjectId,
    required: true,
  },
  likes: {
    type: [mongoose.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);