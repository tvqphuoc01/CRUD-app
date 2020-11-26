const express = require('express');
const router = express.Router();

const db = require('../db.js');

/**
 * id of user
 */
let id;

router.get('/:id', function(req, res) {
  id = req.params.id;
  const user = db.get('user').find({id: id}).value();
  res.render('user', {
    user: user,
  });
});
module.exports = router;
