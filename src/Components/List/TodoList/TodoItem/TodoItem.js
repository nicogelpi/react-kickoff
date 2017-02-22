import './TodoItem.scss'
import React from 'react'

class TodoItem extends React.Component {
  delete() {
    this.props.onDelete(this.props.item)
  }

  render() {
    return (
      <div className="note">
        <a href="#" onClick={this.delete.bind(this)} className="item-delete">DELETE</a>
        <h1>{this.props.item.name}</h1>
        <span>{this.props.item.text}</span>
      </div>
    )
  }
}

TodoItem.propTypes = {
  onDelete: React.PropTypes.func,
  item: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    text: React.PropTypes.string
  })
}

export default TodoItem