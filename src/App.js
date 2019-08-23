import React, { Component } from 'react';

import './App.css';
import Vitor from './VitorComponent/Vitor'
import List from './ListComponent/List'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Vitor',
      email: 'vms'
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)


  }

  changeState() {
    this.setState({ name: 'Vitor Barbosa' })
  }

  resetState() {
    this.setState({ name: 'Vitor ' })
  }

  changeInput(event) {
    let target = event.target
    let index = target.name
    this.setState({
      [index]: target.value
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <div>
              <form action="">
                <label >
                  Nome: <br />
                  <input
                    type="text"
                    name='name'
                    value={this.state.name}
                    onChange = {this.changeInput}
                  />
                </label><br />
                <label >
                  Email: <br />
                  <input
                    type="text"
                    name='email'
                    value={this.state.email}
                    onChange = {this.changeInput}

                  />
                </label>
              </form>
            </div>
            <p>
              {this.state.name} - {this.state.email}
            </p>
            <button onClick={this.changeState}>Mudar estado</button>
            <button onClick={this.resetState}>Reset estado</button>

          </header>
        </div>
      <div className="vitor"><Vitor></Vitor>
      </div>
      <div ><List></List></div>
      </div>
    );
  }
}


