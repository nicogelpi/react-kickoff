//import './List.scss'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import TodoList from './TodoList/TodoList'
import * as Actions from '../../Actions/List/List.creator'

class List extends React.Component {
  render() {
    return (<TodoList {...this.props}></TodoList>)
  }
}

List.propTypes = {
  items: React.PropTypes.array
}

const mapDispatchToProps = dispatch => ({
  onAddTodo(item) { 
    dispatch(Actions.AddItem(item))
  },
  onDeleteTodo(id) {
    dispatch(Actions.RemoveItem(id))
  }
})

const mapStateToProps = state => ({ 
  items: state.List.items 
})

export default (
  <Route path="/list" component={connect(mapStateToProps, mapDispatchToProps)(List)} ></Route>
)