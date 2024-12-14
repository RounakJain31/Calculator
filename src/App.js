import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to append values to the input field
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  // Function to evaluate the expression
  const handleCalculate = () => {

    if (input === '') {
      // If input is empty, show "Error"
      setResult('Error');
      return;
    }
    
    try {
      // Evaluate the expression
      let evalResult = eval(input);
      
      // Handling specific cases
      if (evalResult === Infinity) {
        setResult('Infinity');
      } else if (Number.isNaN(evalResult)) {
        setResult('NaN');
      } else {
        setResult(evalResult);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to clear the input field
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="input-field" />

       {/* Result output */}
       <div className="result">
        {result !== '' && <p>{result}</p>}
      </div>
      
      <div className="button-container">
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

        <button className="clear-button" onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>    
    </div>
  );
}

export default App;