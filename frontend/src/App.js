import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Company from './components/Company';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/company" component={Company} />
          <Route path="/customer" component={Company} />
        </Switch>
      </div>
    );
  }
}

export default App;
