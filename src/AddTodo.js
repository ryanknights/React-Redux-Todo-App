import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }
  render() {
    return (
      <div className="mb-4">
        <form onSubmit={this.addTodo.bind(this)}>
          <div className="input-group input-group-lg">
            <input 
              type="text" 
              onChange={event => this.setState({text: event.target.value})} 
              value={this.state.text} 
              className="form-control" 
              placeholder="Something I need to do...."
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">Add</button>
            </span>           
          </div>
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
