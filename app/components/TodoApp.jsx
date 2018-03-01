const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoSearch = require('TodoSearch');
const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Do the dishes'
        }, {
          id: 4,
          text: 'Vacuum the floor'
        }

      ]
    }
  },

  handleAddTodo: function (text) {
    const {todos} = this.state;
    alert(`New todo: ${text}`);
    this.setState({
      id: todos.length+1,
      text: text
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