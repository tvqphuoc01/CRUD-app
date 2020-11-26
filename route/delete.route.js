const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const db = require('../db');

router.get('/:id', function(req, res) {
  id = req.params.id;
  db.get('user').remove({id: id}).write();
  res.redirect('/');
});

module.exports = router;
