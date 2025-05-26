import {useEffect, useRef, useState} from 'react';

enum Operators {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperator = useRef<Operators>(null);

  useEffect(() => {
    if (lastOperator.current) {
      const firstPartFormula = formula.split(' ').at(0);
      setFormula(`${firstPartFormula} ${lastOperator.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(subResult.toString());
  }, [formula]);

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
    lastOperator.current = null;
    setFormula('0');
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
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }

    if (!number.endsWith('.')) {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    if (formula.includes(Operators.divide)) return;
    setLastNumber();
    lastOperator.current = Operators.divide;
  };

  const multiplyOperation = () => {
    if (formula.includes(Operators.multiply)) return;
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

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const number1 = Number(firstValue);
    const number2 = Number(secondValue);

    if (isNaN(number2)) return number1;

    switch (operation) {
      case Operators.add:
        return number1 + number2;
      case Operators.subtract:
        return number1 - number2;
      case Operators.multiply:
        return number1 * number2;
      case Operators.divide:
        return number1 / number2;
      default:
        throw new Error('Not supported operation');
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());

    lastOperator.current = null;
    setPrevNumber('0');
  };

  return {
    // Properties
    number,
    prevNumber,
    formula,
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
