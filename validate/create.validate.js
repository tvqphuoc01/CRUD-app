const db = require('../db');

module.exports.validateCreate = function(req, res, next) {
  const userName = req.body.username;
  const userPassword = req.body.password;
  const userEmail = req.body.email;
  const checkUserName = db.get('user').find({username: userName}).value();
  const checkEmail = db.get('user').find({email: userEmail}).value();

  // eslint-disable-next-line prefer-const
  let errors = [];

  /** Check user name and password, email */
  if (!userName) {
    errors.push('Username is required !!!');
  }

  if (!userPassword) {
    errors.push('Password is required !!!');
  }

  if (!userEmail) {
    errors.push('Email is required !!!');
  }

  if (checkUserName !== undefined) {
    errors.push('Sorry...Username already exist !!!');
  }

  if (checkEmail !== undefined) {
    errors.push('This email has been taken, Do you already has an account?');
  }

  if (userPassword.length < 8 && userPassword !== '') {
    errors.push('Password must have at least 8 characters !!!');
  }

  if (errors.length !== 0) {
    res.render('../create/create', {
      errors: errors,
    });
    return;
  }

  next();
};
