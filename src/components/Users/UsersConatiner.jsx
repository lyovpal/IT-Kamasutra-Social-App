import React from 'react';
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
  toggleFollowingProgressAC,
  getUsersThunkCreator,
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { UserAPI } from '../../api/api';

class UsersContainer extends React.Component {
  
  componentDidMount () {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }
  
  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);

    this.props.setCurrentPage(pageNumber);
    UserAPI.getUsers(pageNumber, this.props.pageSize).then((resp) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(resp.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
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
      dispatch(toggleIsFetchingAC(isFetching));
    },
    toggleFollowingProgress: (isFetching, userId) => {
      dispatch(toggleFollowingProgressAC(isFetching, userId));
    },
    getUsersThunk: (currentPage, pageSize) => {
      dispatch(getUsersThunkCreator(currentPage, pageSize));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
