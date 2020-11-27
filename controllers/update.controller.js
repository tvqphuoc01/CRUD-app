const db = require('../db');

let id;

module.exports.updateRender = function(req, res) {
  id = req.params.id;
  res.render('../updateUser/updateUser');
};

module.exports.updateUser = function(req, res) {
  db.get('user').find({id: id}).assign(req.body).write();
  res.redirect('/');
};
