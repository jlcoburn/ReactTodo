var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timesstamp: ', now.unix());

var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);

console.log('Current moment: ', currentMoment.format('MMM D, YY @ H:mm a'));
console.log('Current moment: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));