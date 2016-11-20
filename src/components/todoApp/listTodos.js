import React, { Component } from 'react'

class ListTodos extends Component {
  render() {
    const { todos, onToggleTodo } = this.props;
    return (
      <ul>
      {
        todos.map(todo =>
          <li 
            onClick={() => onToggleTodo(todo.id)}
            key={todo.id}
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}} >
          {todo.text}
          </li>
        )
      }
      </ul>
    )
  }
}

export default ListTodos