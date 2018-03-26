import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CandidateList from './Components/CandidateList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Candidates React + AJAX (Fetch API)</h1>
        </header>


        <CandidateList />


        <footer style={{color:'Red'}}>
        <hr />
        <h1>Under construction</h1>
        <p>
          {"E.g. Are injections possible:"}
          <a href="https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1">
            https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1</a>
          </p>
          <p>
            {"E.g. Front-end React Routing (SPA-way) could be added. But that's not included in first exam"}
            </p>
        </footer>
      </div>
    );
  }
}

export default App;
