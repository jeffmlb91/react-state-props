# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## STATE AND prompts

# STATE
- They are local to the compenent: Will be defined in the component 
- Cannot be access to other components
- We need them to modify a component like in JS `document.getElementById`


In the below example, we are incrementing the number variable of the by 1 each time the button is being clicked.

The `console.log` only display in the console amd the `state` of the `h1` has not changed on the UI

The `state` is in charge of rendering the change on the UI 
each time the button is being clicked. 


```js
import './App.css';

function App() {

  let number = 1;

  const handleIncrement = () => {
    number++;
    console.log("number", number)
  }
  
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
```
# Rendering on the UI 

As we mentioned, the `state` is in charge of rendering the change on the UI each time the button is being clicked.

In order to achieve that, we will ` import {useState} from react`;

then we will set a `const [] = useState()` this is a function which initialize the state

then we  define a variable and Set that variable to the value
 `const [counter, setCounter] = useState(0)`
 - We put an initial value 0
 - We name a `counter` variable and setCounter

```js
import './App.css';
import { useState } from 'react';
```

then

```js
const [] = useState()
```

then

- create a variable called `counter` that will be modified on clinck by the `setCounter` (which is a function)
- we advise react that the initial balue is `0` and pass it in the `useState(0)`
- this makes the `let number = 1;` irrelevant because we have a new variable called `counter` which will be updated by the `setCounter`

```js
  const [counter, setCounter] = useState(0)
```
- Now in he `handleIncrement` variable/function, we call
the `setCounter` function and we pass a value of `counter + 1`

```js
const handleIncrement = () => {
    //number++;
    setCounter(counter + 1)
    console.log("number", counter)
  }
```

# Making a counter 

- We import react useState from react `import { useState } from 'react';

```js 
import { useState } from 'react';
```
- We then define the useState variable and the counter and setCounter

```js
  const [counter, setCounter] = useState(0);
```
- We defined variables handleIncrememt and handleDecrement 
- We call the setCounter function and pass counter -1 and counter +1 on eachh of themselves

```js
  const handleIncrement = () => {
    setCounter(counter + 1);
  }
  const handleDecrement = () => {
    setCounter(counter - 1);
  }
```
- In the return function we need to define the counter in a h1 tag and also define the button and add an onclick function

```js
 <h1>{counter}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>

  ```