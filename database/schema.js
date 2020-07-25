const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const entrySchema = new mongoose.Schema({
  title: String,
  user: String,
  img: String,
  qty: Number,
  date: String,
  type: String
}
);

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;