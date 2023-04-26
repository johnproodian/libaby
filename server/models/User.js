const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            // This should be a string, but I can't autoincrement a string...
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // I'm not sure if this is best, but for now it can be zip code
        location: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        bookIds: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            // not sure if this is right
            // references: {
            //     model: 'book',
            //     key: 'isbn'
            // }

        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'user',
        freezeTableName: true
    }
);

module.exports = User;