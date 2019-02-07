import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Sääasema" />
        <Form />
      </div>
    );
  }
}

export default App;
