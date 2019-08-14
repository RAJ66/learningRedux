import React from 'react';
import User from '../UserComponent/User'
import './styles.css'

import vitorPhoto from '../vitor.jpg'
import tiagoPhoto from '../tiago.jpg'
import pirucasPhoto from '../pirucas.png'

export default function Vitor() {


  return (
    <div className='container'>
      <div className='user' >
      <p> I am vitor component! 😁</p></div>
      <div className='user' >
        <User name='Vitor' photo={vitorPhoto} />
      </div>
      <div className='user' >
        <User name='Tiago' photo={tiagoPhoto} /></div>
      <div className='user' >
        <User name='Piruças' photo={pirucasPhoto} /></div>
    </div>

  )

}

