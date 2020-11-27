const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controllers/create.controller');

router.get('/', controller.createRender);

router.post('/create', controller.checkPassword);

module.exports = router;
