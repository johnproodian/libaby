const express = require('express');
// import connection info to db
const sequelize = require('./config/connection.js');
const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// // connect to pg db
// client.connect((err) => {
//     if (err) {
//         console.log('connection error', err.stack)
//     } else {
//         console.log('connected');
//     }
// })

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Libaby is now listening on port ${PORT}`)
    })
    User.create({
        username: 'test',
        email: 'test@test.com',
        password: 'test12345'
    })
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



