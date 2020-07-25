const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('../database/index.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/items', function(req, res) {
  db.find()
  .then((all) => res.json(all))
  .catch(err => err);
})

app.listen(port, () => console.log(`GarSHAREden listening at http://localhost:${port}`))