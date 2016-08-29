'use strict';

const { combineReducers, } = require('redux');

module.exports = combineReducers({
  config: require('./setup'),
});
