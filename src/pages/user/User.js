import React from 'react';
import './styles.css'
import UserForm from './UserForm';
import photoVitor from '../../photos/vitor.jpg'
import photoTiago from '../../photos/tiago.jpg'





export default function User() {
  let list = [
    {
      name: 'Vitor',
      email: 'vitor@gmail.com',
      img: photoVitor
    },
    {
      name: 'tiago',
      email: 'tiago@gmail.com',
      img: photoTiago
    },
  ]

  return (
    <div className='Home' id='home'>
      <div className='customForm' >
      <UserForm></UserForm>

      </div>
      <br/>
      <table className='customTable' >
        <tr >
          <th >Name:</th>
          <th >Email:</th>
          <th >Photo:</th>


        </tr>
        {list.map((item) => {
          return (
            <tr>
              <td >{item.name}</td>
              <td >{item.email}</td>
              <td className='ppp'>
                <img src={item.img}  height="80" width="100"/>
                </td>

            </tr>)
        })}
      </table>
    </div>

  )

}