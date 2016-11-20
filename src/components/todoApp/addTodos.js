import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

let AddTodos = ({ dispatch }) => {
  let input;
  
  return (
    <div>
        <input type="text" 
          ref={node => {
            input = node
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              dispatch(addTodo(input.value))
              input.value = '';
            }
          }}/>
        <button onClick={() => { 
            dispatch(addTodo(input.value))
            input.value = '';
        }}>
          Add todo
        </button>
    </div>
  )
}

AddTodos = connect()(AddTodos)

export default AddTodos;