import React from 'react'
import {Component} from 'react'
import { connect } from 'react-redux'
import {showAll,showTodo,showDone} from '../../actions'

class Footer extends Component {
  render() {
    const { dispatch } = this.props; 
    return (
      <div>
        <a href="#" 
          onClick={
            () => { 
              dispatch(showAll())
            }
          }>all</a>{" "}
        <a href="#"          
          onClick={
            () => { 
              dispatch(showTodo())
            }
          }>todo</a>{" "}
        <a href="#"          
          onClick={
            () => { 
              dispatch(showDone())
            }
          }>done</a>
      </div>
    )
  }
}

Footer = connect()(Footer)

export default Footer