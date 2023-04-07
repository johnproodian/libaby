const { Client } = require('pg');
// configure .env to be able to use process.env for db host, port, name, user, password
require('dotenv').config();

// create a new pg client with connection info--connecting to Steven's server
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// export connection
module.exports = client;