import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
        followed: false,
        fullName: 'Anderson',
        status: 'Agent',
        location: { city: 'New York', country: 'USA' },
      },
      {
        id: 2,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
        followed: true,
        fullName: 'Smith',
        status: 'Agent',
        location: { city: 'New York 2', country: 'USA' },
      },
      {
        id: 3,
        photoURL:
          'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png',
        followed: false,
        fullName: 'Jhon',
        status: 'Agent',
        location: { city: 'New York 3', country: 'USA' },
      },]
    )
  }

  let user = props.users.map((item) => {
    return (
      <div key={item.id}>
        <span>
          <div>
            <img className={style.avatar} src={item.photoURL}/>
          </div>
          <div>
            { item.followed ? <button onClick={() => {props.unFollow(item.id)}}>Unfollow</button> 
            : <button onClick={() => {props.follow(item.id)}}>Follow</button> }
          </div>
        </span>
        <span>
          <span>
            <div>{item.fullName}</div>
            <div>{item.status}</div>
          </span>
          <span>
            <div>{item.location.country}</div>
            <div>{item.location.city}</div>
          </span>
        </span>
      </div>
    );
  });
  return <div>{user}</div>;
};

export default Users;
