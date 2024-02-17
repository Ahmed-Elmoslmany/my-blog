import { useContext } from "react";
import { ThemeContext } from "../App";
import { MoonIcon, SunIcon } from "./assets/icons";
import {  NavLink } from "react-router-dom";

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className="header" >
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
           <NavLink to='/' className="toHome">
            <span> 🇵🇸 المُسلماني</span>
           </NavLink>
          </div>
          <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? <MoonIcon /> : <SunIcon />}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
