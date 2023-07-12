var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors');
var catsRouter = require('./routes/cats');
var breedsRouter= require('./routes/breeds')
var iamgesRouter= require('./routes/images')

var app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/cats', catsRouter);
app.use('/api/breeds', breedsRouter);
app.use('/api/images', iamgesRouter);

module.exports = app;
