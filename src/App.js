import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  }
  const handleDecrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
