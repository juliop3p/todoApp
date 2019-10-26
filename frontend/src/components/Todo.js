import React from 'react'

function Todo(props) {
    return (
        <div className="container-todos">
            <input type="checkbox" 
                id="todo"
                checked={props.elem.completed}
                onChange={() => props.handleChangeCheckBox(props.elem.id)}
            />
            <p className={props.elem.completed && 'completed'}>{props.elem.title}</p>
            <button className="remove-btn" onClick={() => props.handleDelete(props.elem.id)}>Remove</button>
        </div>
    )
}

export default Todo