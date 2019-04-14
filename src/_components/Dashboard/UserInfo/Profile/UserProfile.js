import React from 'react';
// import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';

const UserProfile = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="card bg-primary border-bottom border-dark rounded card-spacing">
      <div className="floating-cntr">
        <Tooltip title="Edit Profile" placement="top">
          <IconButton aria-label="View">
            <Icon className="text-white">edit</Icon>
          </IconButton>
        </Tooltip>

      </div>
      <h6 className="font-weight-bold text-white opac-5">PROFILE</h6>
      <div className="d-flex header-cntr mt-2">
        {/* <Avatar alt="Remy Sharp" src="users/rick.jpg" /> */}
        <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar big-avatar" />
        <div className="desc text-white">
          <h5 className="font-weight-bold mb-0">Anil D souza</h5>
          <h6 className="font-weight-normal opac-5 my-1"><small>UI LEAD</small></h6>
          <h6 className="text-white">7.5 yrs</h6>
        </div>
      </div>

      <div className="mt-2">
        <span className="badge badge-pill badge-border text-white">UX</span>
        <span className="badge badge-pill badge-border text-white">JAVASCRIPT</span>
        <span className="badge badge-pill badge-border text-white">HTML/CSS</span>
        <span className="badge badge-pill badge-border text-white">ANGULAR</span>
        <span className="badge badge-pill badge-border text-white">REACT</span>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  // todo: PropTypes.object.isRequired,
};

export default UserProfile;
