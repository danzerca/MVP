const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const request = require('request');
const Entry = require('../database/schema.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/items', function(req, res) {
  Entry.find()
  .then((all) => res.json(all))
  .catch(err => err);
})
///food/${req.body}

app.get('/items/USDA', function(req, res) {
  var search = Object.keys(req.query)[0];
  request(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=gURpydyhWG9u4QpNoxZGUo1MmBNwfLv2gTA6lbuk&query=${search}`, function (error, response, body) {
    if (error) {
      res.send('error:', error); // Print the error if one occurred
    } else {
      var results = JSON.parse(response.toJSON().body).foods;
      var filtered = [];
      results.map(each => {
        var obj = {};
        obj['description'] = each.description;
        obj['foodNutrients'] = each.foodNutrients;
        filtered.push(obj);
      })
      res.send(filtered);
    }
    console.log('statusCode:', response.statusCode);
  });
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