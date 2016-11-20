import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../../actions'

class Counter extends Component {
    render() {
      let {counter, onIncrement, onDecrement } = this.props;
      return (
        <div>
          <div>{counter}</div>
          <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
          </div>
        </div>
      )
    }
}

Counter = connect(
  (state) => {
    return {
      counter:state.counter
    }
  },
  (dispatch) => {
    return {
      onIncrement: () => {dispatch(increment())},
      onDecrement: () => {dispatch(decrement())}
    }
  }
)(Counter)

export default Counter;
