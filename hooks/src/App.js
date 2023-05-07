import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';

function App() {
  const [first,setFirst] = useState(0);
  const [second,setSecond] = useState(0);
  const [greaterValue, setGreaterValue] = useState(null);

  useEffect(() => {
    if (first > second) {
      setGreaterValue(first);
    } else if (second > first) {
      setGreaterValue(second);
    } else {
      setGreaterValue(null);
    }
  }, [first, second]);

  let displayValue;
  if (greaterValue) {
    displayValue = <p>{greaterValue}</p>;
  } else {
    displayValue = <p>Values are equal</p>;
  }

  return (
    <div className='hook'>
      {displayValue}
      <p>First value is {first}</p>
      <p>Second value is {second}</p>
      <button onClick={()=> setFirst(first + 1)}>
        change first
      </button>
      <button onClick={()=> setSecond(second + 1)}>
        change second
      </button>
    </div>
  );
}

export default App;