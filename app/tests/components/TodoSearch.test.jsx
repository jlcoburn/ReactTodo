var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('Should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('Should call onSearch with entered input text', ()=> {
      const searchText = 'Dog';
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
      todoSearch.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSearch.refs.searchText);

      expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('Should call onSearch with checked value', () => {
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
      todoSearch.refs.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);

      expect(spy).toHaveBeenCalledWith(true,'');
  })
});