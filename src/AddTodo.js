import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {text: ''}
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo.bind(this)}>
          <input type="text" onChange={event => this.setState({text: event.target.value})} value={this.state.text} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
  addTodo (event) {
    event.preventDefault();
    if (this.state.text === '') {
      return alert('Enter some text');
    }
    this.props.add(this.state.text);
    this.setState({text: ''});
  }
}

export default AddTodo
