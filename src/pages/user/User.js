import React from 'react';
import './styles.css'
import UserForm from './UserForm';




export default function User() {
  let list = [
    {
      name: 'Vitor',
      email: 'vitor@gmail.com'
    },
    {
      name: 'tiago',
      email: 'tiago@gmail.com'
    },
  ]

  return (
    <div className='Home'>
      <div className='UserForm'>
      <UserForm></UserForm>

      </div>
      <table className='listUser' >
        <tr>
          <th className='listLine'>Name:</th>
          <th className='listLine'>Email:</th>

        </tr>
        {list.map((item) => {
          return (
            <tr>
              <td className='listLine'>{item.name}</td>
              <td className='listLine'>{item.email}</td>

            </tr>)
        })}
      </table>
    </div>

  )

}