import React, { useState } from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((resp) => {
          props.setUsers(resp.data.items);
        });
    }
  };

  let user = props.users.map((item) => {
    return (
      <div>
        <div key={item.id}>
          <span>
            <div>
              <img
                className={style.avatar}
                src={item.photos.small !== null ? item.photos.small : userPhoto}
              />
            </div>
            <div>
              {item.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(item.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(item.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{item.name}</div>
              <div>{item.status}</div>
            </span>
            <span>
              {/* <div>{item.location.country}</div>
            <div>{item.location.city}</div> */}
            </span>
          </span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <button onClick={getUsers}>getUsers</button>
      <div>{user}</div>
    </div>
  );
};

export default Users;
