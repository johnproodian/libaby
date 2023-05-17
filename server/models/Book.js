const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authors: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        // need to update this to indicate that it references user model
        userIds: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
            // references: {
            //     model: 'user',
            //     key: 'id'
            // }
        }
    },
    {
        sequelize,
        modelName: 'book',
        underscored: true,
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = Book;

