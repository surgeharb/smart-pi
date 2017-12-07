const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  'username': { type: String, default: '' }
});

let model_capsule = mongoose.model('User', schema);
module.exports = model_capsule;