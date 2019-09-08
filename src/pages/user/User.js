import React from 'react';
import './styles.css';
import UserForm from './UserForm';
import photoVitor from '../../photos/vitor.jpg';
import photoTiago from '../../photos/tiago.jpg';

export default function User() {
  const list = [
    {
      name: 'Vitor',
      email: 'vitor@gmail.com',
      img: photoVitor,
    },
    {
      name: 'tiago',
      email: 'tiago@gmail.com',
      img: photoTiago,
    },
  ];

  return (
    <div className="Home" id="home">
      <div className="customForm">
        <UserForm />
      </div>
      <br />
      <table className="customTable">
        <tr>
          <th>Name:</th>
          <th>Email:</th>
          <th>Photo:</th>
        </tr>
        {list.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td className="tdImg">
              <img src={item.img} alt="user picture" aria-hidden="true" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
