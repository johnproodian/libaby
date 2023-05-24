const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // me

        // users
        users: async () => {
            const users = await User.findAll();
            return users;
        }

        // user

        //
    },

    Mutation: {
        // addUser
        addUser: async (parent, args) => {
            console.log('hittttttt');
            console.log('args:', args);
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // login
        login: async (parent, args) => {
            console.log(args);
            const user = await User.findOne({
                where: { email: args.email }
            });

            if (!user) {
                throw new AuthenticationError('No user with that email address...');
            };
            // user.logThisPW();
            // console.log('up:', user.password);
            // console.log('ap:', args.password);
            // const correctPW = await user.isCorrectPassword(args.password);
            // console.log(correctPW);

            if (user.password !== args.password) {
                throw new AuthenticationError('Incorrect password...');
            }

            const token = signToken(user);
            return { token, user };
        }

        // logout
    }
};

module.exports = resolvers;