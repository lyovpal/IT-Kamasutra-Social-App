import React from 'react';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from "./Users"
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then((resp) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(resp.data.items);
      this.props.setTotalUsersCount(resp.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((resp) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(resp.data.items);
      });  
  }

  render() {
    return <>
             {this.props.isFetching ?  <Preloader/> : null}
              <Users users={this.props.users}
              follow={this.props.follow}
              unFollow={this.props.unFollow}
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              onPageChanged={this.onPageChanged}
              currentPage={this.props.currentPage}
              />
            </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
