const express = require('express');
// import connection info to db
const client = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

// connect to pg db
client.connect((err) => {
    if (err) {
        console.log('connection error', err.stack)
    } else {
        console.log('connected');
    }
})

app.listen(PORT, () => {
    console.log(`Libaby is now listening on port ${PORT}`)
})

