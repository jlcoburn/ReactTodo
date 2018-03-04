const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');


const TodoAPI = require('TodoApi');
let uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },

  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },

  handleToggle: function (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  },


  handleAddTodo: function (text) {

    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          id: uuid(),
          completed: false
        }
      ]
    })
  },

  handleSearch: function (showCompleted, searchText) {
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
       <TodoList todos={todos} onToggle={this.handleToggle}/>
       <AddTodo onAdd={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;