const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=>{
  console.log('New State: ', store.getState());
});

store.dispatch(actions.addTodo('Clean yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

require('style!css!foundation-sites/dist/css/foundation-float.min.css');
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
