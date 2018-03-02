const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
let uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Do the dishes'
        }, {
          id: uuid(),
          text: 'Vacuum the floor'
        }

      ]
    }
  },

  handleAddTodo: function (text) {

    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          id: uuid()
        }
      ]
    })
  },

  handleSearch: function (showCompleted, searchText) {
    console.log('called');
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function () {
    const {todos} = this.state;
    return (
      <div>
       <TodoSearch onSearch={this.handleSearch}/> 
       <TodoList todos={todos}/>
       <AddTodo onAdd={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;