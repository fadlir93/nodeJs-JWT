const express = require('express');
const bodyParser = require('body-parser')
const app = express()

const PORT = 3000;

app.listen(PORT, function() {
    console.log('Server is running on PORT', PORT);
});