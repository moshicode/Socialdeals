import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feeds from './components/Feeds.js';
import AddNewDeal from './components/Feeds/AddNewDeal'
import Register from './components/Forms/Register'
import Login from './components/Forms/Login'
// import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userAuth: this.getLoggedInUser()
    }
  }

  logoutClearState = () => {
    localStorage.clear()
    this.setState({ userAuth: '' })
  }

  getLoggedInUser() {
    return { username: localStorage.username, id: localStorage.id } || ''
  }

  setLoggedInUser = (userID, userName) => {
    this.setState({ userAuth: { id: userID, username: userName } })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar userAuth={this.state.userAuth} logoutClearState={this.logoutClearState} />
          <main className="container">
            <Switch>
              <Redirect exact from="/" to="/feeds" />
              <Route path="/register" exact render={() => <Register userAuth={this.state.userAuth} />} />
              <Route path="/login" exact render={() => <Login setLoggedInUser={this.setLoggedInUser} userAuth={this.state.userAuth} />} />
              <Route path="/feeds" exact render={() => <Feeds userAuth={this.state.userAuth} />} />
              <Route path="/add" exact render={() => <AddNewDeal userAuth={this.state.userAuth} />} />
            </Switch>
          </main>
          <div className="footer-wrapper">

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
