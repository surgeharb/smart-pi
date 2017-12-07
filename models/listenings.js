const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  'type': { type: Number, default: 0 },
  'date': { type: Number, default: '' },
  'time': { type: String, default: '' },
  'length': { type: Number, default: 0 },
  'userId': { type: Schema.Types.ObjectId, ref: 'User' }
});

let model_capsule = mongoose.model('Listening', schema);
module.exports = model_capsule;