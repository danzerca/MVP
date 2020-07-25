const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GarSHAREden', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('>>DB Connected');
});

module.exports = db;