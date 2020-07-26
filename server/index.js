const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const Entry = require('../database/schema.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/items', function(req, res) {
  Entry.find()
  .then((all) => res.json(all))
  .catch(err => err);
})

app.post('/items', function(req, res) {
  console.log('post req entered: ', req.body);
  Entry.create(req.body)
  .then(res.send(req.body.title))
  .catch(err => err);
})

app.put('/items', function(req, res) {
  db.updateOne()
  .then()
  .catch(err => err);
})

app.delete('/items', function(req, res) {
  db.findOneAndDelete()
  .then()
  .catch(err => err);
})


app.listen(port, () => console.log(`GarSHAREden listening at http://localhost:${port}`))