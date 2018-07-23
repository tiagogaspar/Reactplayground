import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './starRating'
import FormRating from './formRating'

class App extends Component {

  render() {
    const items = [
        "Classifique a capacidade tecnica.",
        "Como você vê a comunicação com a equipe?",
        "No geral, como você avalia?",
    ];

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Playground</h1>
        </header>

        <div style={{paddingTop: 1+'em'}}>
          <FormRating items={items} onClick={(data)=> {console.log("Form Submited: "+data)}}/>
        </div>

      </div>
    );
  }
}
export default App;
