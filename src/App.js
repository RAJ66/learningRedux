import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import './App.css';


export default class App extends Component {
 
  render() {
    return (
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>

        </div>    
    );
  }
}


