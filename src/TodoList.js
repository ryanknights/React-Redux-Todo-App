import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    let todos = this.props.todos;

    if (!todos.length) {
      return (
        <div className="alert alert-warning">
          No Todos to display
        </div>
      )
    } else {
      return (
        <div className="card">
          <div className="card-header">Todos</div>
          <ul className="list-group list-group-flush">
            {todos.map((todo) => {
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
            })}
          </ul>
        </div>
      );
    }
  }
}

export default TodoList
