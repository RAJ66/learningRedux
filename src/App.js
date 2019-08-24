import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routerConfig from './RoutesConfig'
import './App.css';


export default class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>

        </div>
        {routerConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          ></Route>
        })}
      </div>
    );
  }
}


