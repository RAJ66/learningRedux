import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routerConfig from './RoutesConfig'
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div className='Total'>

        <div className="App">
          <Link className='page' to="/">Home</Link>
          <Link className='page' to="/user">User</Link>
        </div>
        <div className='Main'>
          {routerConfig.map((value, key) => {
            return <Route
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}
            ></Route>
          })}
        </div>
      </div>
    );
  }
}


