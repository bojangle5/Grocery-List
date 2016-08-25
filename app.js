const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const grocery = require('./routes/grocery');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/groceries');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/grocery', grocery);

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
