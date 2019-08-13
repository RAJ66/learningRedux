import React from 'react';
import User from './User';

import vitorPhoto from './vitor.jpg'
import tiagoPhoto from './tiago.jpg'
import pirucasPhoto from './pirucas.png'

export default function Vitor() {

  return (
  <div>
    <p> I am vitor component! 😁</p>
    <User name='Vitor' photo={vitorPhoto}/>
    <User name='Tiago'  photo={tiagoPhoto} />
    <User name='Piruças' photo={pirucasPhoto}/>
    </div>

  )

}

