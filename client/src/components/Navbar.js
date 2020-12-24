import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
    history.push("/");
  };

  return (
    <nav>
      <div className="nav-wrapper teal darken-1" style={{ padding: "0 2rem" }}>
        <span className="brand-logo  hide-on-med-and-down">Shorten a link</span>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
