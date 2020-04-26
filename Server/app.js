var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var cloudinary = require('cloudinary').v2

var indexRouter = require('./routes/index');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

cloudinary.config({
    cloud_name: "dlqxpkg7h",
    api_key: "661815952242859",
    api_secret: "zfP44FsPnUFcaXBvRF1TW0xfdlw"
})



app.use('/', indexRouter);

module.exports = app;
