const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;
mongoose.connect('mongodb://localhost:27017/mestodb', { useNewUrlParser: true });
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', users);
app.all('/cards', cards);
app.use('/', users);
app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
