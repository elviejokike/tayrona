'use strict';

import App from './App';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
var configureStore = require('./store/configureStore');

function setup():Component {

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({
          isLoading: false,
        })),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
