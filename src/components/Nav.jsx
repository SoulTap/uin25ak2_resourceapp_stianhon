import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/html" className={({ isActive }) => isActive ? "tab active" : "tab"}>HTML</NavLink>
      <NavLink to="/css" className={({ isActive }) => isActive ? "tab active" : "tab"}>CSS</NavLink>
      <NavLink to="/javascript" className={({ isActive }) => isActive ? "tab active" : "tab"}>JavaScript</NavLink>
      <NavLink to="/react" className={({ isActive }) => isActive ? "tab active" : "tab"}>React</NavLink>
      <NavLink to="/sanity" className={({ isActive }) => isActive ? "tab active" : "tab"}>Sanity and headless CMS</NavLink>
    </nav>
  );
};

export default Nav;
