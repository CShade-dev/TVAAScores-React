import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import Games from './components/Games';
import Teams from './components/Teams';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "null" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res })) 
        .catch(err => err); 
  }

  componentDidMount() {
    this.callAPI();
  }

  render () {
    return (
      <div className="App">
        <Router basename="/">
        <Route path="/" exact component={Landing} />
        <Route path="/games" component={Games} />
        <Route path="/teams" component={Teams} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
    );
    }
}

export default App;
