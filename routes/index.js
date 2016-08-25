const express = require('express');
const router = express.Router();
const groceryModel = require('../models/groceryModel.js');

router.get('/', function(req, res, next) {
  groceryModel.find(function(err, groceries){
    // since the function is asyncrounous, we have to pass in a callback to
    // be ran when the db query is finished
    res.render('index',{
      title: 'Grocery List',
      groceries: groceries
    });
  });
});

router.post('/grocery-list', function(req, res, next){

const grocery = new groceryModel({
  text: req.body.text,
  qty: req.body.qty
});

task.save(function(err, task){
  // since the function is asyncrounous, we have to pass in a callback to
  // be ran when the db insert is finished
  res.redirect('/');
});
});

module.exports = router;
