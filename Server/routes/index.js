var express = require('express');
var router = express.Router();


/* GET home page. */
router.use('/task', require('./task'))
router.use('/user', require('./user'))



module.exports = router;
