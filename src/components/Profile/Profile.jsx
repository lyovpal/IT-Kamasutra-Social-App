import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
