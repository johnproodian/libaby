const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    async isCorrectPassword(password) {
        const compareResult = await bcrypt.compare(password, this.password);
        console.log('cR:', compareResult);
        return compareResult;
    }

    logThisPW() {
        console.log(this.password);
    }
};

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
            type: DataTypes.STRING,
            allowNull: false
        },
        // bookIds: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     // not sure if this is right
        //     // references: {
        //     //     model: 'book',
        //     //     key: 'isbn'
        //     // }

        // }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'user',
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = User;