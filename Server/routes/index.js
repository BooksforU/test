var express = require('express');
var router = express.Router();
var multiparty = require('multiparty')
var cloudinary = require('cloudinary').v2

/* GET home page. */
router.use('/recipe', require('./recipeRoute'))
router.use('/cuisine', require('./cuisineRoute'))



module.exports = router;
