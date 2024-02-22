import React, { useState } from 'react';
import './Calculator.css'; // Import CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');

  // Function to handle button clicks
// Function to handle button clicks
const handleButtonClick = (value) => {
    switch (value) {
      case 'AC':
        setInput('');
        setFirstOperand('');
        setOperator('');
        break;
      case 'DEL':
        setInput(input.slice(0, -1)); // Remove the last character
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setOperator(value);
        setFirstOperand(input);
        setInput('');
        break;
      case '=':
        calculateResult();
        break;
      default:
        setInput(input + value);
        break;
    }
  };
  

// Function to handle arithmetic operations
const calculateResult = () => {
    const secondOperand = input;
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
      default:
        return;
    }
    setInput(result.toString());
    setFirstOperand('');
    setOperator('');
  };
  

  return (
    <div className="calculator">
      <div className="input-panel">
        <div className="input-row">
          <div className='top-row'>{firstOperand} {operator}</div>
          <input type="text" value={input} readOnly />
        </div>
      </div>
      <div className="button-panel">
      <button className="wide-button" onClick={() => handleButtonClick('AC')}>AC</button>
      <button onClick={() => handleButtonClick('DEL')}>DEL</button>
        <button onClick={() => handleButtonClick('/')}>/</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="wide-button" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
