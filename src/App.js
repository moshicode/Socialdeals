import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
// import ScraperInput from './components/Forms/ScraperInput';
import Feeds from './components/Feeds.js';
import AddNewDeal from './components/Feeds/AddNewDeal'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      isLoading: true
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <main className="container">
            <Switch>
              <Redirect exact from="/" to="/feeds" />
              <Route path="/feeds" exact component={Feeds} />
              <Route path="/add" exact component={AddNewDeal} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
