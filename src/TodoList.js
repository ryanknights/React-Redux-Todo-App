import React, { Component } from 'react';

import TodoItem from './TodoItem';

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
              return (
                <TodoItem 
                  key={todo.text}
                  todo={todo}
                  add={this.props.add}
                  toggle={this.props.toggle}
                  remove={this.props.remove}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default TodoList
