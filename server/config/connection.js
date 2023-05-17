// const { Client } = require('pg');
const { Sequelize } = require('sequelize');
// configure .env to be able to use process.env for db host, port, name, user, password
require('dotenv').config();

// temporary local db for testing
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
})

try {
    sequelize.authenticate();
    console.log('Sequelize connection has been establisthed!')
} catch(error) {
    console.error('Unable to connect db via sequelize:', error);
}



// export connection
module.exports = sequelize;

// // temporary local db for testing
// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'libaby',
//     user: 'john',
//     password: process.env.TEST_PW
// })

// // create a new pg client with connection info--connecting to Steven's server
// const client = new Client({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD
// });

// module.exports = client;