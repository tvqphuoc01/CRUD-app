const db = require('../db');
const shortid = require('shortid');

module.exports.createRender = function(req, res) {
  res.render('../create/create');
};

module.exports.checkPassword = function(req, res) {
  /** Genarate user Id */
  req.body.id = shortid.generate();

  /** Check user password */
  const userPassword = req.body.password;
  const value = req.body.username;
  const userName = db.get('user').find({username: value}).value();
  if (userPassword.length < 8 && userName !== undefined) {
    res.render('../create/create', {
      checkName: false,
      checkPass: false,
    });
  } else if (userName !== undefined) {
    res.render('../create/create', {
      checkName: false,
    });
  } else if (userPassword.length < 8) {
    res.render('../create/create', {
      checkPass: false,
    });
  }
  if (userPassword.length >= 8 && userName === undefined) {
    db.get('user').push(req.body).write();
    res.redirect('/');
  }
};
