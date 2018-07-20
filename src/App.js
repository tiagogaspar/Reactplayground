import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      input: 'init',
      stars:{
          star_1: 0,
      }
  };

  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'myinputfield'){
        this.setState({input: event.target.value})
    }
    else{

      var nextState = this.state.stars.find(event.target.value);

      if (this.setState.stars.$event.target.name == 0) {

      }

      console.log('teste...');
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <i name="star1" className="fa fa-star fa-3x" aria-hidden="true" onClick={this.handleChange}></i>

        <Button color="danger">{this.state.input}</Button>
        <input type="text" name="myinputfield" value={this.state.input} onChange={this.handleChange} />


      </div>
    );
  }
}

export default App;
