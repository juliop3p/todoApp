const dbTodos = require('../models/todosSchema')

module.exports = {
    async index(req, res) {
        const todos = await dbTodos.findAll()

        return res.json(todos)
    },

    async store(req, res) {
        const {title, completed} = req.body
        const todo = await dbTodos.create({
            title,
            completed
        })

        return res.json(todo)
    },

    async update(req, res) {
        const {completed} = req.body
        const updateTodo = await dbTodos.update(
            {completed: completed},
            {where: {id: req.params.id}}
        )
        
        return res.json(updateTodo)

    },

    async destroy(req, res) {
        const remove = await dbTodos.destroy({
            where: {id:  req.params.id}
        })

        res.send('Removide com Sucesso!')
    }
}