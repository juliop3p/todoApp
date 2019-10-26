import React from 'react'
import api from '../service/api'
import Todo from '../components/Todo'
import './style.css'

export default class TodoList extends React.Component {
    constructor() {
        super() 
        this.state = {
            title: '',
            completed: false,
            todos: []
        }
    }

    componentDidMount() {
        this.loadTodos()
    }

    componentDidUpdate() {
        this.loadTodos()
    }

    loadTodos = async () => {
        const response = await api.get('/todos')

        this.setState({todos: response.data})

    }

    handleClickAdd = async () => {
        const {title, completed} = this.state

        if(title.length > 0) {
            await api.post('/todos', {title, completed})
            this.loadTodos()
        }
    }

    handleChangeCheckBox = (id) => {
        this.setState(prevValue => {
            const updateTodos = prevValue.todos.map(elem => {
                if(elem.id === id) {
                    elem.completed = !elem.completed
                    this.updateDB(id, elem.completed)
                } return elem
            })
            return {
                updateTodos
            }
        })
    }

    handleDelete = async (id) => {
        await api.delete(`/todos/${id}`)

        this.loadTodos()
    }

    updateDB = async (id, completed) => {
        await api.put(`/todos/${id}`, {completed})
    }

    render() {
        const todoList = this.state.todos.map(elem => <Todo key={elem.id} elem={elem} handleChangeCheckBox={this.handleChangeCheckBox} handleDelete={this.handleDelete}/>)
        return (
            <div className="container">
                {todoList}
                <input 
                    type="text"
                    id="title"
                    className="input-todo"
                    placeholder="New todo"
                    value={this.state.title}
                    onChange={event => this.setState({title: event.target.value})}
                />
                <button type="submit" onClick={this.handleClickAdd}>Add to-do</button>
            </div>
        )
    }
}