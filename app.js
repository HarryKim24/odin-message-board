const path = require('node:path');
const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

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
