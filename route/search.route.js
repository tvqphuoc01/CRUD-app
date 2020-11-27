const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controllers/search.controller');

router.get('/search', controller.searchUser);

module.exports = router;
