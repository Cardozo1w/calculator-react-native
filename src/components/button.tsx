import React from 'react';
import {colors} from '../config/theme/app-theme';
import {Pressable, StyleSheet, Text} from 'react-native';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  fill?: boolean;
  onPress?: ()=> void
}

const Button = ({label, backgroundColor, onPress, fill}: ButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        flex: fill ? 1 : 0,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: backgroundColor ? backgroundColor : colors.darkGray,
      })}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkGray,
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: 30,
  },
});
