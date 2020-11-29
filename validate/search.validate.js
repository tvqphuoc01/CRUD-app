const db = require('../db');

module.exports.validateSearch = function(req, res, next) {
  const value = req.query.username;
  const username = db.get('user').find({username: value}).value();
  
  if (username === undefined && value === undefined) {
    res.render('../search/search');
  }

  if (username === undefined && value !== undefined) {
    res.render('../search/search', {
      check: true,
    });
  }

  next();
};
