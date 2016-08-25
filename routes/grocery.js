const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const groceryModel = require('../models/groceryModel.js');


router.get('/', function(req, res, next) {
  ItemModel.find((err, items) => {
    res.render('index.ejs', { item });
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  const grocery = new groceryModel({
    name: req.body.name,
    quantity: Number(req.body.quantity)
  });
  item.save((err, item) => {
    res.redirect('/');
  });
});

module.exports = router;
