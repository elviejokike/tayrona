'use strict';

import React, { Component } from 'react';
import {
 StatusBar, StyleSheet, View
} from 'react-native';
import Colors from './common/Colors';
import AppNavigator from './AppNavigator';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brighColor,
  },
});

export default App;
