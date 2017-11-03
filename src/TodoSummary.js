import React, { Component } from 'react';

class TodoFilter extends Component {
  render() {
    let all = this.props.todos.length;
    let complete = this.props.todos.filter(todo => todo.completed).length;
    let incomplete = this.props.todos.filter(todo => !todo.completed).length;
    let percentage = (complete / all) * 100;
    return (
      <ul>
        <li>Todos: <strong>{all}</strong></li>
        <li>Complete: <strong>{complete}</strong></li>
        <li>Complete: <strong>{incomplete}</strong></li>
        <li>{!isNaN(percentage)? `${percentage.toFixed(2)}% complete` : 'N/A'}</li>
      </ul>
    );
  }
}

export default TodoFilter