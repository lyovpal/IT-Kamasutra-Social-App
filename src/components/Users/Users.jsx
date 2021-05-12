import React from "react"
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { UserAPI } from "../../api/api";
import { followThunkCreator } from "../../redux/usersReducer";

let Users = (props) => {
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
                <NavLink to={'/profile/' + item.id}>
                  <img className={style.avatar} alt="" src={item.photos.small ? item.photos.small : userPhoto}/>
                </NavLink>
              </div>
              <div>
              {/* <button  onClick={() => {
                  props.toggleFollowingProgress(true, item.id); */}
                {item.followed ? 
                <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => { followThunkCreator(item.id)}}>Unfollow</button> :
                <button onClick={() => {
                  
                props.toggleFollowingProgress(true, item.id); 
                 UserAPI.follow(item.id).then((data) => {
                    if (data.resultCode === 0 ) {
                      props.follow(item.id)
                    }
                    props.toggleFollowingProgress(false, item.id);
              });
                }}>Follow</button>}
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
            {pages.map(page =><span key={page.index} onClick={() => props.onPageChanged(page)} className={props.currentPage === page ? style.selectedPage : null}>{page}</span>)}
          </div>
          <div>{user}</div>
        </div>
      );
}

export default Users;