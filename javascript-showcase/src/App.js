import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {tester} from './ES/tester.js';
import {createArrays} from './ES/array.js';
import {Drivechain,Car,createCar} from './ES/classes.js';
import {checkMood} from './ES/promise.js'

class App extends Component {
  constructor(){
    super();
    
    createCar();
    createArrays();
    tester();
    checkMood();
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Modern Ecmascript examples</h1>
        </header>
        <p className="App-intro">
          Open console to see functions
        </p>
      </div>
    );
  }
}
export default App;
