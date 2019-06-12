import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Contact from './pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path- "/contact" component={Contact} />
        </Switch>
      </Router>
    )
  }
}

export default App;
