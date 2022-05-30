import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const name = 'John Smith';
const element = <h1>Hello, {name}</h1>


//React Fragment is <React.Fragment>..... </React.Fragment> or <>...</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);


