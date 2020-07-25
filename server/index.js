const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000;
// add const db = require(path to db index)
// add babel and webpack

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`GarSHAREden listening at http://localhost:${port}`))