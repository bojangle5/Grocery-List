const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  'text' : String,
  'qty': Number
});

module.exports = mongoose.model('Task', taskSchema);
