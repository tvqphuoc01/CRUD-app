const db = require('../db');

module.exports.searchUser = function(req, res) {
  const value = req.query.username;
  const username = db.get('user').find({username: value}).value();

  res.render('../search/search', {
    flag: true,
    user: username,
  });
};
