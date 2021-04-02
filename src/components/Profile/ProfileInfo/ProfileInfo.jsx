import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src="https://html5css.ru/css/img_lights.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}><img src={props.profile.photos.large} alt=""/>ava + description.
        
      </div>
    </div>
  );
};

export default ProfileInfo;
