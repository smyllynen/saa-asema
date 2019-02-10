import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Weather from './Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Sääasema" />
        <Weather />
      </div>
    );
  }
}

export default App;
