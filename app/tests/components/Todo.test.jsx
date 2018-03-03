var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');

describe('Todo', () => {
  it('should exist', ()=> {
    expect('Todo').toExist();
  });
  it('should call ontoggle prop with id on click', () => {
    let todoData = {
      id: 199,
      text: 'Write todo test',
      completed: true
    };
    var spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(199);


  })
});