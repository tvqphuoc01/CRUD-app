const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const db = require('../db');

router.get('/search', function(req, res) {
  const value = req.query.username;
  const username = db.get('user').find({username: value}).value();
  if (username === undefined && value === undefined) {
    res.render('../search/search');
  }

  if (username === undefined && value !== undefined) {
    res.render('../search/search', {
      check: true,
    });
  } else {
    res.render('../search/search', {
      flag: true,
      user: username,
    });
  }
});


module.exports = router;
