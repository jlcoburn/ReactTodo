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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');;
  });

  it('Should toggle completed value when handle toggle called', () => {
   var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it('Should toggle todo from completed to incompleted', () => {
    var todoData = {
       id: 11,
       text: 'test features',
       completed: true,
       createdAt: 0,
       completedAt: 123
     };
     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
     todoApp.setState({todos: [todoData]});
 
     expect(todoApp.state.todos[0].completed).toBe(true);
     todoApp.handleToggle(11);
     expect(todoApp.state.todos[0].completed).toBe(false);
     expect(todoApp.state.todos[0].completedAt).toBe(undefined);
   });
});