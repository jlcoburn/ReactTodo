const React = require('react');

const AddTodo = require('AddTodo');

const Todo = React.createClass({
  render: function () {
    const {text, id} = this.props;
    return(
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Todo;