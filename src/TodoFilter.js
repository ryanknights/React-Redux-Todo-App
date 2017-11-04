import React, { Component } from 'react';

class TodoFilter extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Filter</div>
        <div className="card-body">
          <p>
            Current Filter State: <br />
            <span className="badge badge-primary">{this.props.current}</span>
          </p>
          <button 
            onClick={() => this.props.toggle('SHOW_ALL')} 
            className="btn btn-primary btn-block mb-2"
          >
            Show All
          </button>
          <button 
            onClick={() => this.props.toggle('SHOW_COMPLETED')} 
            className="btn btn-primary btn-block mb-2"
          >
            Show Completed
          </button>
          <button 
            onClick={() => this.props.toggle('SHOW_NOT_COMPLETED')} 
            className="btn btn-primary btn-block mb-2"
          >
            Show Not Completed
          </button>
        </div> 
      </div>
    );
  }
}

export default TodoFilter