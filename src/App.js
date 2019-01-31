import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScraperInput from './components/Forms/ScraperInput';
import Feeds from './components/Feeds.js';
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
          <div className="container">
            <Switch>
              <Redirect exact from="/" to="/feeds" />
              <Route path="/feeds" exact component={Feeds} />
              <Route path="/add" exact component={ScraperInput} />

              {/* <Route path="/actions" exact component={Actions} />
              <Route path="/analytics" exact component={Analytics} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
