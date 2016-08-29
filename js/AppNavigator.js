'use strict';

import React, { Component } from 'react';
import {
  Navigator, Platform, StyleSheet, View
} from 'react-native';
import {connect} from 'react-redux';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View/>;
  }
}

function select(store) {
  return {
    setupReady: store.config.setupReady,
  };
}

export default connect(select)(AppNavigator);
