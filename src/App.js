import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter, addTodo, toggleTodo, removeTodo } from './actions';
import { bindActionCreators } from 'redux'; 

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';
import TodoSummary from './TodoSummary';

class App extends Component {
  render() {
    return (
      <div className="app mt-4">
        <div className="container">
          <h1>React &amp; Redux Todo App</h1>
          <div className="row">
            <div className="col-md-8">
              <AddTodo 
                add={this.props.addTodo} 
              />
              <TodoList 
                todos={getVisibleTodos(this.props.todos, this.props.filter)} 
                toggle={this.props.toggleTodo}
                remove={this.props.removeTodo}
              />              
            </div>
            <div className="col-md-4">
              <TodoSummary
                todos={this.props.todos}
              />
              <TodoFilter 
                toggle={this.props.setVisibilityFilter}
                current={this.props.filter}
              />
            </div>
          </div>        
        </div>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(prevProps.todos, this.props.todos)) {
      this.persistTodos();
    }
    
  }
  persistTodos () {
    localStorage.setItem('todos', JSON.stringify(this.props.todos));
  }
}

function getVisibleTodos (todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_NOT_COMPLETED':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setVisibilityFilter: setVisibilityFilter,
    addTodo: addTodo,
    toggleTodo: toggleTodo,
    removeTodo: removeTodo
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
