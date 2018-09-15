import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Common/NavBar';
import WelcomePage from './pages/WelcomePage';
import CompanyPage from './pages/CompanyPage';
import CustomerPage from './pages/CustomerPage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/company" component={CompanyPage} />
          <Route path="/customer" component={CustomerPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
