/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {CalculatorScreen} from './screens';
import { styles } from './config/theme/app-theme';

function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */

  return (
    <SafeAreaView
      style={{...safeAreaStyles.AndroidSafeArea, ...styles.background}}>
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;

const safeAreaStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
