import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <IndexLink className="nav-link" to="/" activeClassName="active">Home</IndexLink> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses" activeClassName="active">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" activeClassName="active">About</Link>
            </li>
          </ul>
          {/* {loading && <LoadingDots interval={100} dots={20} />} */}
          <ul className="navbar-nav pull-right">
            <li className="nav-item">
              <Link className="nav-link" to="/login" activeClassName="active">Logout</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};


export default Header;
