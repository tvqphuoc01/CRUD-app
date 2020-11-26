const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const db = require('../db');

router.get('/updateUser', function(req, res) {
  res.render('../updateUser/updateUser');
});

router.post('/updateUser/updateUser', function(req, res) {
  db.get('user').find({id: id}).assign(req.body).write();
  res.redirect('/');
});

module.exports = router;
