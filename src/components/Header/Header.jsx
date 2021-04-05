import React from "react";
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        alt="" src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
      />
      <div className={s.loginBlock}>{ props.isAuth ? props.login :
        <NavLink to={'/login'}>Login</NavLink>} 
      </div>
    </header>
  );
};

export default Header;
