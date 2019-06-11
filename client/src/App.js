import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Contact from './pages/contact';
import logo from './logo.svg';
import './App.css';

function App() {
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Switch>
      <Route exact path="/" component={Main} />  
      <Route exact path- "/contact" component={Contact} />
    </Switch>
    </Router>
}

export default App;
