const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);

module.exports = app;
