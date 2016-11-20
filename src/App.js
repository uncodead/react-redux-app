import React, { Component } from 'react'
import Counter from './components/counter'
import TodoApp from './components/todoApp'

class App extends Component {
  render() {
    return (
       <div>
        <div>
          <TodoApp />
          <br/>
          <Counter />
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App;
