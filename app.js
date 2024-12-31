const path = require('node:path');
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');
const messages = require('./db');

const PORT = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.locals.messages = messages;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});