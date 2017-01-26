import './TodoList.scss';
import React from 'react';
import AddItem from './AddItem/AddItem';
import TodoItem from './TodoItem/TodoItem';

class TodoList extends React.Component {
  onDelete(item) {
    this.props.onDeleteTodo(item.id);
  }

  onAdd(data) {
    this.props.onAddTodo(data);
  }

  render() {
    return (
      <div className="todo-list">
        <ul className="item-repeater">
          {this.props.items.map(item => 
            <li key={item.id}>
              <TodoItem onDelete={this.onDelete.bind(this)} item={item}></TodoItem>
            </li>
          )}
        </ul>
        <AddItem onAdd={this.onAdd.bind(this)}></AddItem>
      </div>
    );
  }
}

TodoList.propTypes = {
  items: React.PropTypes.array,
  onAddTodo: React.PropTypes.func,
  onDeleteTodo: React.PropTypes.func
};

export default TodoList;