import React from 'react';
import { NavLink } from 'react-router-dom';
// import LoadingDots from './LoadingDots';

const Sidebar = ({ loading }) => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li>
          <span className="menu-icon d-flex align-items-center justify-content-center">
            <i className="material-icons text-white">
              notes
          </i>
          </span>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/"><i class="material-icons">
            dashboard
            </i>
          </NavLink>
        </li>
        <li className="nav-item bg-white">
          <NavLink className="nav-link" activeClassName="active" to="/courses">
          <i class="material-icons text-primary">
            question_answer
          </i>
          </NavLink >
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/"><i class="material-icons">
            work
            </i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/"><i class="material-icons">
            group
            </i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};


export default Sidebar;
