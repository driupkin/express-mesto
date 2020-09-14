const express = require('express');
const path = require('path');
const users = require('./routes/users');
const cards = require('./routes/cards');
const app = express();
const { PORT = 3000 } = process.env;
app.all('/users', users);
app.all('/cards', cards);
app.all('/users/:id', users);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('...Works');
});