import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routerConfig from './RoutesConfig'
import './App.css';
import {lightMode,darkMode} from './Mode';



export default class App extends Component {
  
  componentDidMount(){
    lightMode();
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
          <button   className='buttonMode'onClick={lightMode}>Light Mode</button>
          <button className='buttonMode' onClick={darkMode}>Dark Mode</button>

        </div>
      </div>
    );
  }
}


