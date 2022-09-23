const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')

// Signup Routes

router.get('/signup', (req, res) => {
  res.render('users/Signup.jsx');
});

router.post('/signup', async (req, res) => {
  // encrypt the password
  req.body.password = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );

  // create the New User
  User.create(req.body)
    .then((user) => {
      res.redirect('/users/login');
    })
    .catch((error) => {
      console.error(error);
      res.json({
        error: error
      });
    })
});

// Login Routes

router.get('/login',  (req, res) => {
  res.render('users/Login.jsx');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
    .then(async (user) => {
      if (user) {
        const result = await bcrypt.compare(password, user.password)
        if (result) {

          req.session.username = username;
          req.session.loggedIn = true;

          res.redirect('/fruits');
        } else {
          res.json({
            error: 'Passwords do not match!'
          });
        }
      } else {
        res.json({
          error: 'User does not exist!'
        })
      }
    })
    .catch((error) => {
      console.error(error);
      res.json({
        error: error
      });
    });
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => { // removes the session from the USER -- NOT THE DATABASE
    if (error) {
      console.error(error);
    } else {
      res.redirect('/users/login');
    }
  });
});

module.exports = router;