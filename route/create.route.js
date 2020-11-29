const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const validate = require('../validate/create.validate');
const controller = require('../controllers/create.controller');

router.get('/', controller.createRender);

router.post('/create', validate.validateCreate, controller.createUser);

module.exports = router;
