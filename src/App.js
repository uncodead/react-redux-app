import React, { Component } from 'react'
import Counter from './components/counter'
import TodoApp from './components/todoApp'
import { increment, decrement } from './actions'

class App extends Component {
  render() {
    const {store} = this.context;

    return (
       <div>
        <div>
          <TodoApp />
          <br/>
          <Counter
            value={store.getState().counter}
            onIncrement={() => store.dispatch(increment())}
            onDecrement={() => store.dispatch(decrement())}
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
