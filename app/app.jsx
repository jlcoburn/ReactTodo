const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');


require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <TodoApp />,
  // <p className="text-center">Boilerplate 3 Project</p>,
  document.getElementById('app')
);
