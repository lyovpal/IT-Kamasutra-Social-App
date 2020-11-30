import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img alt="" src="https://html5css.ru/css/img_lights.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description.</div>
    </div>
  );
};

export default ProfileInfo;
