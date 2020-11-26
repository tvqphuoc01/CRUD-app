const express = require('express');
const app = express();
const port = 3000;

const db = require('./db');
const userRouter = require('./route/user.route');
const userCreate = require('./route/create.route');
const userDelete = require('./route/delete.router');
const userSearch = require('./route/search.route');
const userUpdate = require('./route/update.route');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.render('index', {
    ID: db.get('user').value(),
  });
});


/**
 * create user
 */
app.use('/create', userCreate);

/**
 * id of user
 */
app.use('/user', userRouter);

/**
 * search user by username
 */
app.use('/user', userSearch);

/**
 * update user
 */
app.use('/update', userUpdate);

/** delete user */
app.use('/delete', userDelete);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
