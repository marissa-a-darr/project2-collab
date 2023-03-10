const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const path = require('path');
const exphbs = require('express-handlebars');
const { registerDecorator } = require('handlebars');

// Define routes
router.get("/", (req, res) => {
  res.render('login', { message: null });
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email,} });
    if (!userData) {
      res.status(400).json({ message: 'No user found' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password, userData.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid Credentials! Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'Login Successful!' });
    });

  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  try {
      const newUser = req.body;
      newUser.password = await bcrypt.hash(req.body.password, 10);
      const userData = await User.create(newUser);
      res.status(200).json(userData)
  } catch (err) {
      res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;