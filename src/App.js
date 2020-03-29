import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Games from './components/Games';
import Teams from './components/Teams';
import AdminPage from './components/AdminPage';



class App extends Component {
  render () {
    return (
      <div className="App">
        <Router basename="/">
        <Route path="/" exact component={Landing} />
        <Route path="/games" component={Games} />
        <Route path="/teams" component={Teams} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={AdminPage} />
      </Router>
    </div>
    );
    }
}

export default App;
