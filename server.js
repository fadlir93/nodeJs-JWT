const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect('mongodb://localhost/jwtauth');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('Server is running on PORT', PORT);
});

app.get('/checking', function(req, res) {
    res.json({
        "Tutorial" : "Welcome to the node express JWT Tutorial"
    });
})