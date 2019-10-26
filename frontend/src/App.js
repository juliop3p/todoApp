import React from 'react'
import './style.css'
import TodoList from './pages/TodoList'
import Header from './components/Header/Header'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <TodoList />
            </div>
        )
    }
}