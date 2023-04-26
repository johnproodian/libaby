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

// test query for steven's db
// const text = "insert into users(id, username, location) values($1, $2, $3) returning *";
// const values = ['123', 'testuser', 'austin'];
// client.query(text, values, (err, res) => {
//     if (err) {
//         console.log(err.stack);
//     } else {
//         console.log(res.rows[0]);
//     }
// })

