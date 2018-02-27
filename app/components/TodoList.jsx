const React = require('react')
const Todo = require('Todo');

const TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      console.log(todos[0].id);
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      })
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;