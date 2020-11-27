const db = require('../db');

let id;

module.exports.userID = function(req, res) {
  id = req.params.id;
  const user = db.get('user').find({id: id}).value();
  res.render('user', {
    user: user,
  });
};
