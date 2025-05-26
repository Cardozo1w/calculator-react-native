import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operators>(null);

  const buildNumber = (inputNumber: string) => {
    // Return if dot is clicked more than once
    if (number.includes('.') && inputNumber.includes('.')) return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Decimal point
      if (inputNumber === '.') {
        return setNumber(number + inputNumber);
      }

      // Evaluate 0 after point
      if (inputNumber === '0' && number.includes('.')) {
        return setNumber(number + inputNumber);
      }

      // Avoid 0 on the start
      if (inputNumber !== '0' && !number.includes('.')) {
        return setNumber(inputNumber);
      }

      // Avoid multiple ceros before point
      if (inputNumber === '0' && !number.includes('.')) {
        return;
      }
    }
    setNumber(number + inputNumber);
  };

  const resetValues = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const deleteValue = () => {
    if (number.includes('-') && number.length === 2) {
      return setNumber('0');
    }
    if (number.length > 1 && !number.startsWith('0')) {
      return setNumber(number.slice(0, -1));
    }
    if (number.length > 1 && number.startsWith('0') && number.includes('.')) {
      return setNumber(number.slice(0, -1));
    }
    if (number !== '0') {
      return setNumber('0');
    }
  };

  const toggleSign = () => {
    if (number === '0') return;

    if (number.startsWith('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }

    if (!number.endsWith('.')) {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperator.current = Operators.add;
  };

  const calculateResult = () => {
    const number1 = Number(number);
    const number2 = Number(prevNumber);

    switch (lastOperator.current) {
      case Operators.add:
        setNumber(`${number1 + number2}`);
        setPrevNumber('0');
        break;
      case Operators.subtract:
        setNumber(`${number2 - number1}`);
        setPrevNumber('0');
        break;
      case Operators.multiply:
        setNumber(`${number1 * number2}`);
        setPrevNumber('0');
        break;
      case Operators.divide:
        setNumber(`${number2 / number1}`);
        setPrevNumber('0');
        break;
      default:
        throw new Error('Not supported operation');
    }
  };

  return {
    // Properties
    number,
    prevNumber,
    // Methods
    buildNumber,
    resetValues,
    deleteValue,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};

export default useCalculator;
