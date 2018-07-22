import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'

class App extends Component {

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Playground</h1>
        </header>

        <div style={{paddingTop: 1+'em'}}>
          <StarRating/>
        </div>
        
      </div>
    );
  }
}
export default App;
