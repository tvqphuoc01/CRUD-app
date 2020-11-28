const db = require('../db');
const shortid = require('shortid');

module.exports.createRender = function(req, res) {
  res.render('../create/create');
};

module.exports.checkPassword = function(req, res) {
  /** Generate user Id */
  req.body.id = shortid.generate();

  db.get('user').push(req.body).write();
  res.redirect('/');
};
