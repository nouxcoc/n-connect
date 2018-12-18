import React from 'react';
import { NavLink  } from 'react-router-dom';
// import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" activeClassName="active" to="/questions">Questions</NavLink >
            </li>
          </ul>
          {/* {loading && <LoadingDots interval={100} dots={20} />} */}
          <ul className="navbar-nav pull-right">
            <li className="nav-item">
              <NavLink  className="nav-link" to="/login">Logout</NavLink >
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};


export default Header;
