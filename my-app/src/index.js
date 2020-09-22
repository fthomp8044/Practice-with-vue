import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const fName = "Freddy";
const lName = "Thompson";


const luckyNumber = 5;

ReactDOM.render(
  <div>
    <h1>hello {fName} { lName} </h1>
    <p>Your lucky number is {luckyNumber} </p>
  </div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
