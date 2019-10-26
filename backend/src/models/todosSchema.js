const Sequelize = require('sequelize')
const db = require('../config/dbConnection')

const Todos = db.define('todos', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

// Todos.sync({force: true})

module.exports = Todos