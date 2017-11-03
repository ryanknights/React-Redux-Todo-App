import React, { Component } from 'react';

class TodoFilter extends Component {
  render() {
    return (
      <div>
        <p>Current Filter State: <strong>{this.props.current}</strong></p>
        <button onClick={() => this.props.toggle('SHOW_COMPLETED')}>Show Completed</button>
        <button onClick={() => this.props.toggle('SHOW_NOT_COMPLETED')}>Show Not Completed</button>
        <button onClick={() => this.props.toggle('SHOW_ALL')}>Show All</button> 
      </div>
    );
  }
}

export default TodoFilter