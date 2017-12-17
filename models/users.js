const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  'username': { type: String, default: '' },
  'songsListenedTotal': { type: Number, default: 0 },
  'songsTypesPlayed': { type: Array, default: [0,0,0,0,0,0,0,0,0] }
});

let model_capsule = mongoose.model('User', schema);
module.exports = model_capsule;