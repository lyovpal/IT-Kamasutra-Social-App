import React from "react"
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
  console.log(props)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1 ; i <= pagesCount; i++){
      pages.push(i);
    }
    let user = props.users.map((item) => {
      return (
          <div key={item.id}>
            <span>
              <div>
                <img className={style.avatar} src={item.photos.small !== null ? item.photos.small : userPhoto}/>
              </div>
              <div>
                {item.followed ? (<button onClick={() => {props.unFollow(item.id);}}>Unfollow</button>) : 
                                  (<button onClick={() => {props.follow(item.id);}}>Follow</button>)}
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
      );
    });
    return (
        <div>
          <div>
            {pages.map(page => <span onClick={(e) => props.onPageChanged(page)} className={props.currentPage === page && style.selectedPage}>{page}</span>)}
          </div>
          <div>{user}</div>
        </div>
      );
}

export default Users;