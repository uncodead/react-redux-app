import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

let AddTodos = ({ dispatch }) => {
  let input;
  
  return (
    <div>
        <input type="text" ref={node => {
          input = node
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