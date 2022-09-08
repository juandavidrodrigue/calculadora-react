import React, { useState } from 'react'

const Calculator = () => { 
    const[Calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/','*','+','-','.'];

    const updateCalc = value => {
      if (
        ops.includes(value) && Calc ==='' ||
        ops.includes(value) && ops.includes(Calc.slice(-1))
      ) {
        return; 
      }
     setCalc(Calc + value);
     if (!ops.includes(value)) {
      setResult(eval(Calc + value).toString());
     }
    }

    const createDigits = () => {
      const digits = [];
      
      for (let i = 1; i < 10; i++) {
        digits.push(
          <button onClick={() => updateCalc(i.toString()
          )} key={i}>
          {i}</button>
        ) 
      }
        return digits;
      }
      const calculate = () => {
        setCalc(eval(Calc).toString());
      }

      const deleteLast = () => {
        if (Calc == '') {
          return;
        }

        const value = Calc.slice(Calc.length);

        setCalc(value);
      }
    return (
      <div className="app">
        <div className="calculator">
          <div className="display">
            { result ? <span>({result})</span> : ''}&nbsp;
            { Calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
  
            <button onClick={deleteLast}>DEl</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
  )
}

export default Calculator