const express = require('express');
const mailController = require('../controller/mail-controller');

const router  = express.Router();

router.post('/getMail', mailController.getMail);

module.exports = router;
