const React = require('react');

const AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    let task = this.refs.task.value;
    if (task.length > 0) {
      this.refs.task.value = '';
      this.props.onAdd(task);
    } else {
      this.refs.task.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer"> 
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder ="Enter new task" ref="task"></input>
          <button className="button hollow">Add task</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;