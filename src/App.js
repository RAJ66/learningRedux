import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routerConfig from './RoutesConfig'
import './App.css';



export default class App extends Component {
   
  
  lightMode() {
    console.log('light mode : on');
    document.getElementById("header").style.backgroundColor = "#6200ee";
    document.getElementById("mainTest").style.backgroundColor = "rgb(242,231,254)";
    document.getElementById("home").style.color = "black";


  }

  render() {
    return (
      <div className='Total' >
        
          <div className="HeaderApp" id='header'>
            <Link className='page' to="/">Home</Link>
            <Link className='page' to="/user">User</Link>
          </div>

        <div className='Main' id='mainTest'>
          {routerConfig.map((value, key) => {
            return <Route
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}
            ></Route>
          })}
        </div>
        <div className='ModeColor'>
          <button onClick={this.lightMode}>Light Mode</button>
          <button onClick={this.lightMode}>Dark Mode</button>

        </div>
      </div>
    );
  }
}


