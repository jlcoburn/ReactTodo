const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

// load Foundation



//require('style!css!foundation-sites/dist/css/foundation-float.min.css');

require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
