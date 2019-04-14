import React from 'react';
// import PropTypes from 'prop-types';
// import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';

const CurrentProject = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="mt-4 card bg-light-dark border-bottom border-dark rounded card-spacing">
      <div className="floating-cntr">
        <IconButton aria-label="View" color="primary">
          <Icon className="text-white">arrow_forward</Icon>
        </IconButton>
      </div>
      <h6 className="font-weight-bold text-white opac-5">CURRENT PROJECT</h6>
      <h4 className="font-weight-bold text-primary ls-4"><strong>HME</strong></h4>
      <div className="">
        <span className="badge badge-pill badge-border d-inline-block px-3 py-2 mb-1 font-weight-normal text-white">UX</span>
        <span className="badge badge-pill badge-border d-inline-block px-3 py-2 mb-1 font-weight-normal text-white">HTML</span>
        <span className="badge badge-pill badge-border d-inline-block px-3 py-2 mb-1 font-weight-normal text-white">CSS</span>
      </div>
    </div>
  );
};

CurrentProject.propTypes = {
  // todo: PropTypes.object.isRequired,
};

export default CurrentProject;
