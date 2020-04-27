const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const mongoSecret = require('./mongoSecret')

const PORT = process.env.PORT || 5000

const routes = require('./routes/routes');

var app = express();
var server = require('http').Server(app);
server.listen(PORT);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://arduino-health-app.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next();
});

app.use(bodyParser.json());

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

mongoose
    .connect(
        mongoSecret.secret,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(result => {
        server.listen(PORT, () => {
            console.log("Server is up!");
        });
    })
    .catch(err => {
        console.log(err);
    });