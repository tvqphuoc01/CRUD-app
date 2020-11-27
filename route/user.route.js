const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const controller = require('../controllers/user.controller');

/**
 * id of user
 */

router.get('/:id', controller.userID);
module.exports = router;
