import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';

function App() {
  const [first,setFirst] = useState(0);
  const [second,setSecond] = useState(0);
  useEffect(() => {

  },[])

  let greaterValue = null;
  if (first > second) {
    greaterValue = first;
  } else if (second > first) {
    greaterValue = second;
  }

  return (
    <div className='hook'>
      {greaterValue && <p>{greaterValue}</p>}
      {first === second && <p>values are equal first is {first} second is  {second}</p>}
      {greaterValue === first && <p>First value is greater</p>}
      <button onClick={()=> setFirst(first + 1)}>
        change first
      </button>
      {greaterValue === second && <p>Second value is greater</p>}
      <button onClick={()=> setSecond(second + 1)}>
        change second
      </button>
    </div>
  );
}

export default App;