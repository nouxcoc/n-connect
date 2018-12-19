import React from 'react';
import { NavLink } from 'react-router-dom';
// import LoadingDots from './LoadingDots';

const Sidebar = ({ loading }) => {
  return (
    <div className="sidebar minimized">
      <ul className="nav flex-column">
        <li>
          <span className="menu-icon d-flex align-items-center justify-content-center">
            <i className="material-icons text-white">
              notes
          </i>
          </span>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/dashboard"><i className="material-icons">
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
          <NavLink className="nav-link" activeClassName="active" exact to="/projects"><i className="material-icons">
            work
            </i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/team"><i className="material-icons">
            group
            </i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};


export default Sidebar;
