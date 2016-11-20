import React, {Component} from 'react'

class TodoApp extends Component {
  render() {
    const { onAddTodo, todos } = this.props
    return (
      <div>
        <button onClick={onAddTodo}>
          Add todo
        </button>
        <ul>
          {todos.map(todo =>
            <li key={todo.id}>{todo.text}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default TodoApp;
