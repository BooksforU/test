var express = require('express');
var router = express.Router();


/* GET home page. */
router.use('/task', require('./task'))



module.exports = router;
