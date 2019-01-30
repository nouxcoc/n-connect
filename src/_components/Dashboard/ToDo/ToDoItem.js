import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const ToDoItem = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="px-4 py-3 border-bottom border-light position-relative">
      <div className="floating-cntr">
        <Tooltip title="Remove" placement="top">
          <IconButton aria-label="Copy" onClick={() => onDelete(todo._id)}>
            <Icon className="text-extra-muted">close</Icon>
          </IconButton>
        </Tooltip>
      </div>
      <h6 className="mb-0 font-weight-bold cursor-pointer d-flex align-items-center">

        <span className={(todo.active ? 'text-extra-muted' : 'text-success')}>
          <i className="material-icons md-36 mr-2" onClick={() => onUpdate(todo)}>
            {todo.active ? 'panorama_fish_eye' : 'done_all'}
          </i>
        </span>
        <span className={(todo.active ? 'text-primary' : 'text-extra-muted')} onClick={() => todo.active && onEdit(todo._id)}>
          {todo.title}
          <small className="text-extra-muted d-block text-uppercase"><small>{todo.type}</small></small>
        </span>

        {/* <small>
          <small className="float-right">
            <Moment format="DD MMM YYYY">
              {todo.createdOn}
            </Moment>
          </small>
        </small> */}
      </h6>
      <p className="mb-0"></p>
    </div>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ToDoItem;
