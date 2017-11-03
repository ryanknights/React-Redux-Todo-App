import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    let todos = this.props.todos;
    return (
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.text}>
                {todo.text}
                <input 
                  type="checkbox" 
                  onChange={() => this.props.toggle(todo.id)} 
                  defaultChecked={todo.completed} 
                />
                <span onClick={() => this.props.remove(todo.id)}>(x)</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList
