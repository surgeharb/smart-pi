const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  'title': { type: String, default: '' },
  'length': { type: Number, default: 0 },
  'type': { type: Number, default: 0 },
  'url': { type: String, default: '' }
});

let model_capsule = mongoose.model('Songs', schema);
module.exports = model_capsule;