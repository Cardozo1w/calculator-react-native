import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../config/theme/app-theme';
import Button from '../components/button';

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>1000 + 500</Text>
      </View>
      <View style={{gap: 15, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="C" backgroundColor={colors.lightGray} />
          <Button label="+/-" backgroundColor={colors.lightGray} />
          <Button label="del" backgroundColor={colors.lightGray} />
          <Button backgroundColor={colors.orange} label="÷" />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button backgroundColor={colors.orange} label="×" />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button backgroundColor={colors.orange} label="–" />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button backgroundColor={colors.orange} label="+" />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="0" fill/>
          <Button label="." />
          <Button label="=" />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  resultContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '300',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
});
