const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controllers/update.controller');

router.get('/:id', controller.updateRender);

router.post('/updateUser', controller.updateUser);

module.exports = router;
