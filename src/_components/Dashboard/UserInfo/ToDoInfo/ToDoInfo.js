import React from 'react';
// import PropTypes from 'prop-types';
// import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
// import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';

const ToDoInfo = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="card mt-4 bg-light-dark border-bottom border-dark rounded card-spacing">
      <div className="floating-cntr">
        <IconButton aria-label="View" color="primary">
          <Icon className="text-white">arrow_forward</Icon>
        </IconButton>
      </div>
      <h6 className="font-weight-bold text-white opac-5">TODO TASKS</h6>
      <div className="row">
        <div className="col-6">
          <h2 className="font-weight-bold mb-0 text-danger">4</h2>
          <small className="text-extra-muted"><small>PENDING</small></small>
        </div>
        <div className="col-6">
          <h2 className="font-weight-bold mb-0 text-warning">2</h2>
          <small className="text-extra-muted"><small>IN PROGRESS</small></small>
        </div>
      </div>
    </div>
  );
};

ToDoInfo.propTypes = {
  // todo: PropTypes.object.isRequired,
};

export default ToDoInfo;
