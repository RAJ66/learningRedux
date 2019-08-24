import React from 'react';
import './styles.css'




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
    <div  className='tableUser'>
      <table className='listUser' >
        <tr>
          <th className='listUser'>Name:</th>
          <th className='listUser'>Email:</th>

        </tr>
        {list.map((item)=>{
          return(
          <tr>
            <td className='listUser'>{item.name}</td>
            <td className='listUser'>{item.email}</td>
          
          </tr>)
        })}
      </table>
    </div>

  )

}