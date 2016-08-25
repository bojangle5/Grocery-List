const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const groceryModel = require('../models/groceryModel.js');


router.get('/', function(req, res, next) {
  groceryModel.find({},(err, groceries) => {
    res.render('index.ejs', { groceries: groceries });
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  const grocery = new groceryModel({
    text: req.body.text,
    qty: Number(req.body.qty)
  });
  grocery.save((err, grocery) => {
    res.redirect('/');
  });
});

module.exports = router;
