const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const validate = require('../validate/search.validate');
const controller = require('../controllers/search.controller');

router.get('/search', validate.validateSearch, controller.searchUser);

module.exports = router;
