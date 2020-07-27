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

app.post('/items', (req, res) => {
  Entry.create(req.body)
  .then( () => res.send(req.body.title))
  .catch(err => err);
})

app.patch('/items', (req, res) => {
  Entry.findById(req.body._id, (err, results) => {
    results.qty = results.qty - 1;
    results.save();
    if (err) {
      res.send(err);
    }
    res.send(results);
  });
})

app.delete('/items', function(req, res) {
  Entry.deleteOne(req.body)
    .then(res.send(res.deletedCount));

})


app.listen(port, () => console.log(`GarSHAREden listening at http://localhost:${port}`))