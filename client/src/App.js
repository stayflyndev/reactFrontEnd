import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavBar from './components/app.navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
    <AppNavBar />
      </div>
    );
  }
}

export default App;
