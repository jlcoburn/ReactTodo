const $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos: [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })
    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
      // if (searchText.length > 0) {
      //   if (todo.text.toLowerCase().indexOf(searchText) != -1) {
      //     return todo;
      //   } 
      // } else {
      //   return filteredTodos;
      // }
    });
    //sort by showCompleted
    filteredTodos.sort((a,b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });


    return filteredTodos;
  }
};