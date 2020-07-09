import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Hello} from "./components/hello"
import Welcome from "./components/welcome"
import Message from "./components/message"
import Count from "./components/count"

function App() {
  return (
    <div className="App">

        <h1>
         Hello React
        </h1>

        <Hello name="Aditya" training='Python'>
        <p> Childen class</p>
        <button> Action </button>

        </Hello>

        <Hello name="Chavan" training="java"/>
        <Welcome name ="Pratz"/>

        <Message/>

        <Count/>





    </div>
  );
}

export default App;
