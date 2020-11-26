const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const shortid = require('shortid');

const db = require('../db');

router.get('/', function(req, res) {
  res.render('../create/create');
});

router.post('/create', function(req, res) {
  req.body.id = shortid.generate();
  const userPassword = req.body.password;
  const value = req.body.username;
  const userName = db.get('user').find({username: value}).value();
  if (userPassword.length < 8 && userName !== undefined) {
    res.render('../create/create', {
      checkName: false,
      checkPass: false,
    });
  } else if (userName !== undefined) {
    res.render('../create/create', {
      checkName: false,
    });
  } else if (userPassword.length < 8) {
    res.render('../create/create', {
      checkPass: false,
    });
  }
  if (userPassword.length >= 8 && userName === undefined) {
    db.get('user').push(req.body).write();
    res.redirect('/');
  }
});

module.exports = router;
