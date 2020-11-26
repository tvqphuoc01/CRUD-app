const express = require('express');
const app = express();
const port = 3000;
const shortid = require('shortid');


const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.defaults({user: []}).write();

app.get('/', function(req, res) {
  res.render('index', {
    ID: db.get('user').value(),
  });
});


/**
 * create user
 */
app.get('/create', function(req, res) {
  res.render('../create/create');
});

app.post('/create/create', function(req, res) {
  req.body.id = shortid.generate();
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
});

/**
 * id of user
 */
let id;

app.get('/user/:id', function(req, res) {
  id = req.params.id;
  const user = db.get('user').find({id: id}).value();
  res.render('user', {
    user: user,
  });
});

/**
 * search user by username
 */
app.get('/search/search', function(req, res) {
  const value = req.query.username;
  const username = db.get('user').find({username: value}).value();
  if (username === undefined && value === undefined) {
    res.render('../search/search');
  }

  if (username === undefined && value !== undefined) {
    res.render('../search/search', {
      check: true,
    });
  } else {
    res.render('../search/search', {
      flag: true,
      user: username,
    });
  }
});

/**
 * update user
 */
app.get('/updateUser', function(req, res) {
  res.render('../updateUser/updateUser');
});

app.post('/updateUser/updateUser', function(req, res) {
  db.get('user').find({id: id}).assign(req.body).write();
  res.redirect('/');
});

/** delete user */
app.get('/delete/:id', function(req, res) {
  id = req.params.id;
  db.get('user').remove({id: id}).write();
  res.redirect('/');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
