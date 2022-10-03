import './App.css';
import { useState } from 'react';

function App() {
  //let number = 1;
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    //  number++;
    setCounter(counter + 1)
    console.log("Number", counter);
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
    console.log("Number", counter);
  }

  return (
    <div className="App">
     <h1>{counter}</h1>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
