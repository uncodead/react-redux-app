import React, {Component} from 'react'
import AddTodos from './addTodos'
import Footer from './footer'
import VisibleTodoList from '../../containers/visibleTodoList'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodos />
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}

export default TodoApp;