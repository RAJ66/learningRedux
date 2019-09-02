import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routerConfig from './RoutesConfig'
import './App.css';



export default class App extends Component {
  
  componentDidMount(){
    this.lightMode();
  }

  lightMode() {
    console.log('light mode : on');
    document.getElementById("mainTest").style.backgroundColor = "rgb(242,231,254)";
    document.getElementById("home").style.color = "black";

  }

  darkMode(){
    console.log('dark mode : on');
    document.getElementById("mainTest").style.backgroundColor = "black";
    document.getElementById("home").style.color = "white";
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
        <div className='footerApp'>
          <button   className='buttonMode'onClick={this.lightMode}>Light Mode</button>
          <button className='buttonMode' onClick={this.darkMode}>Dark Mode</button>

        </div>
      </div>
    );
  }
}


