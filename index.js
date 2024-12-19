require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const conn = require('./config/db');
conn();

// home route
app.get('/', (req, res) => {
    res.send('Home Page!')
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});