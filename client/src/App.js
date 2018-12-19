import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { 
    players: [], 
    teams: []
  }

  getPlayers = () => {
    var players = [ { 'name': 'foo'} ]
    this.setState({players})
  }

  getTeams = () => {
    var teams = [ { 'name': 'bar'} ]
    this.setState({teams})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            NBA Assist
          </p>
        </header>
      </div>
    );
  }
}

export default App;
