import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    let todo = this.props.todo;
    const listItemClass = 'list-group-item' + ((todo.completed)? ' list-group-item-success' : '');
    return (
      <li className={listItemClass} key={todo.text}>
        {todo.text}
        <span
          className="btn btn-sm btn-danger float-right" 
          onClick={() => this.props.remove(todo.id)}
        >
          Remove
        </span>
        <label className="checkbox-inline float-right mr-2">
          <input 
            type="checkbox" 
            onChange={() => this.props.toggle(todo.id)} 
            defaultChecked={todo.completed}
          /> Complete?         
        </label>                
      </li>
    );
  }
}

export default TodoItem
