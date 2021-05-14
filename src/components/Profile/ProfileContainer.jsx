import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { UserAPI } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    UserAPI.getProfile(userId).then((resp) => {
      this.props.setUserProfile(resp.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let WithUrlDataContainerComponnent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile: setUserProfileAC })(
  WithUrlDataContainerComponnent
);
