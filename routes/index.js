const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: req.app.locals.messages });
});

router.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  req.app.locals.messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;