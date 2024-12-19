const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User')

const Expense = sequelize.define('Expense', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('Food', 'Transport', 'Utilities', 'Entertainment', 'Healthcare'),
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    }
}, {
    timestamps: true,
});

module.exports = Expense;