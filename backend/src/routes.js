const express = require('express')
const routes = express.Router()
const TodosController = require('./controller/TodosController')

routes.get('/todos', TodosController.index)
routes.post('/todos', TodosController.store)
routes.put('/todos/:id', TodosController.update)
routes.delete('/todos/:id', TodosController.destroy)

module.exports = routes