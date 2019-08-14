import React, { Component } from 'react';
import './styles.css'
// import { Container } from './styles';

export default class User extends Component {
  render() {
    return (
      <div >
        <div>
          Nome : {this.props.name}
        </div>
        <div>
          Foto :<br></br> <img src={this.props.photo} />
        </div>
      </div>
    )
  }
}
