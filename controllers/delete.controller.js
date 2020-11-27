const db = require('../db');

module.exports.deleteUser = function(req, res) {
  id = req.params.id;
  db.get('user').remove({id: id}).write();
  res.redirect('/');
};
