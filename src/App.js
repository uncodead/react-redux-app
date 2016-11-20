import React, { Component } from 'react'
import Counter from './components/counter'
import TodoApp from './components/todoApp'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { nextTodoIsd : 0}
  }

  addTodo(store) {
    this.setState({nextTodoIsd:this.state.nextTodoIsd+1});
    store.dispatch({ type: 'ADD_TODO', text: 'Test', id: this.state.nextTodoIsd });
  }

  render() {
    const {store} = this.context;

    return (
       <div>
        <div>
          <TodoApp
            onAddTodo={() => this.addTodo(store)}
            todos={store.getState().todos}
          />

          <Counter
            value={store.getState().counter}
            onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
          />
        </div>
      </div>
    )
  }
}
App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
