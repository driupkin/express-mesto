const express = require('express');
const path = require('path');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public')));
app.all('/users', users);
app.all('/cards', cards);
app.all('/users/:id', users);
app.all('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log('...Works');
});
