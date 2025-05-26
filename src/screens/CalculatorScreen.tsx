import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../config/theme/app-theme';
import Button from '../components/button';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    prevNumber,
    formula,
    buildNumber,
    resetValues,
    deleteValue,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        {formula === prevNumber ? (
          <Text style={styles.subResult}></Text>
        ) : (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {prevNumber}
          </Text>
        )}
      </View>
      <View style={{gap: 15, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button
            label="C"
            onPress={resetValues}
            backgroundColor={colors.lightGray}
          />
          <Button
            onPress={toggleSign}
            label="+/-"
            backgroundColor={colors.lightGray}
          />
          <Button
            label="del"
            onPress={deleteValue}
            backgroundColor={colors.lightGray}
          />
          <Button
            backgroundColor={colors.orange}
            label="÷"
            onPress={divideOperation}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="7" onPress={() => buildNumber(String(7))} />
          <Button label="8" onPress={() => buildNumber(String(8))} />
          <Button label="9" onPress={() => buildNumber(String(9))} />
          <Button
            backgroundColor={colors.orange}
            label="x"
            onPress={multiplyOperation}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="4" onPress={() => buildNumber(String(4))} />
          <Button label="5" onPress={() => buildNumber(String(5))} />
          <Button label="6" onPress={() => buildNumber(String(6))} />
          <Button
            backgroundColor={colors.orange}
            label="-"
            onPress={subtractOperation}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="1" onPress={() => buildNumber(String(1))} />
          <Button label="2" onPress={() => buildNumber(String(2))} />
          <Button label="3" onPress={() => buildNumber(String(3))} />
          <Button
            backgroundColor={colors.orange}
            label="+"
            onPress={addOperation}
          />
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <Button label="0" fill onPress={() => buildNumber(String(0))} />
          <Button label="." onPress={() => buildNumber(String('.'))} />
          <Button
            backgroundColor={colors.orange}
            onPress={calculateResult}
            label="="
          />
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
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
});
