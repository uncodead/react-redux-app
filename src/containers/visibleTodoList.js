import { connect } from 'react-redux'
import ListTodos from '../components/todoApp/listTodos'
import {toggleTodo} from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter){
    case 'SHOW_ALL':
      return todos;
      
    case 'SHOW_TODO':
      return todos.filter((todo) =>  {return !todo.completed});

    case 'SHOW_DONE':
      return todos.filter((todo) =>  {return todo.completed});
      
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodos)

export default VisibleTodoList