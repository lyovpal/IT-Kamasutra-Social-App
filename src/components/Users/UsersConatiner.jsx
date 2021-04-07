import React from 'react';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from "./Users"
import Preloader from '../Common/Preloader/Preloader';
import { UserAPI } from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
  UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then((resp) => {
      console.log(resp, "respose")
      this.props.toggleIsFetching(false);
      this.props.setUsers(resp.items);
      this.props.setTotalUsersCount(resp.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
  UserAPI.getUsers(pageNumber, this.props.pageSize).then((resp) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(resp.items);
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
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
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
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
