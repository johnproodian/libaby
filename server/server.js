const express = require('express');
// import connection info to db
const sequelize = require('./config/connection.js');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth.js');

// const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
    });
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Use graphql at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// HERe needed: app.use for serving static assets in production...

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Libaby is now listening on port ${PORT}`)
    })
    // User.create({
    //     username: 'anothertest',
    //     email: 'anothertest@test.com',
    //     password: 'test12345',
    //     location: "11111"
    // }).then(userData => console.log(userData));
    // User.findAll().then(userData => console.log(user))
    
    // .then(createdData => {
    //     console.log(createdData);
    // })
})

//////////////////////

// // // connect to pg db
// const client = require('./config/connection');

// client.connect((err) => {
//     if (err) {
//         console.log('connection error', err.stack)
//     } else {
//         console.log('connected');
//     }
// })

// // test query for steven's db
// const text = "insert into books(id, isbn, title, author, user_id) values($1, $2, $3, $4, $5) returning *";
// const values = [111, 'isbnstring', 'booktitle', 'bookauthor', '123'];
// client.query(text, values, (err, res) => {
//     if (err) {
//         console.log(err.stack);
//     } else {
//         console.log(res.rows[0]);
//     }
// });



