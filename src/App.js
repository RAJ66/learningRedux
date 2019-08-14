import React, { Component } from 'react';

import './App.css';
import Vitor from './VitorComponent/Vitor'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Vitor'
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)

  }

  changeState() {
    this.setState({ name: 'Vitor Barbosa' })
  }

  resetState() {
    this.setState({ name: 'Vitor ' })
  }

  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          
        {/* 
          <p>
            {this.state.name}
          </p>
          <button onClick={this.changeState}>Mudar estado</button>
          <button onClick={this.resetState}>Reset estado</button>
          */}
        </header>
      </div>
      <Vitor></Vitor>
      </div>
    );
  }
}


