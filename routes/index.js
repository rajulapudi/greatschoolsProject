const express = require('express');
const router = express.Router();


router.use('/',express.static('./views/home.html'))

router.use('/school', require('./school.js'))

module.exports = router;