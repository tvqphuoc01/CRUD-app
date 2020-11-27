const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controllers/delete.controller');

router.get('/:id', controller.deleteUser);

module.exports = router;
