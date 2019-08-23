import React from 'react';




export default function List() {
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
    <div className='container'>
      <table className='tableList'>
        <tr>
          <th>Name:</th>
          <th>Email:</th>

        </tr>
        {list.map((item)=>{
          return(
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
          
          </tr>)
        })}
      </table>
    </div>

  )

}