var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', ()=> {
    expect('TodoApp').toExist();
  });

  it('Should add new task', ()=> {
    const newTask = 'Test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});

    todoApp.handleAddTodo(newTask);;
    expect(todoApp.state.todos[0].text).toBe(newTask);
  });

  it('Should toggle completed value when handle toggle called', () => {
   var todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

});