import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import LoadingDots from './LoadingDots';

const Sidebar = ({ loading }) => {
  return (
    <div className="sidebar minimized">
      {/* <div className="py-3 text-center">
        <h3 className="font-weight-bold"><span className="text-secondary">N</span><span className="text-primary">...</span></h3>
      </div> */}

      <ul className="nav flex-column text-left">
        <li>
          <span className="menu-icon d-flex align-items-center justify-content-center">
            <i className="material-icons">
              notes
          </i>
          </span>
        </li>
        <li>
          <div className="user-info-cntr border-bottom border-light py-1">
            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
              <img src="/users/ad.jpg" />
            </div>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/dashboard">
            <i className="material-icons">
              dashboard
            </i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/questions">
            <i className="material-icons">
              question_answer
          </i>
          </NavLink >
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/projects">
            <i className="material-icons">
              work
            </i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/team">
            <i className="material-icons">
              group
            </i>
          </NavLink>
        </li>
      </ul>
      <div className="signout-btn">
        <NavLink exact to="/login">
          <i className="material-icons">
            power_settings_new
          </i>
        </NavLink>
        {/* <small className="text-extra-muted"><small>SIGN OUT</small></small> */}
      </div>
    </div>
  );
};


export default Sidebar;
