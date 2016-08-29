'use strict';

var { createStore, } = require('redux');
var reducers = require('../reducers');
var {AsyncStorage} = require('react-native');
var {persistStore, autoRehydrate} = require('redux-persist');

function configureStore(onComplete: ? () => void) {
  const store = createStore(reducers, undefined, autoRehydrate())
  persistStore(store, {storage: AsyncStorage}, onComplete)
  return store;
}

module.exports = configureStore;
