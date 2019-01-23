import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ToDoItem = ({ todo, onEdit, onDelete, onUpdate }) => {
  return (
    <div className="px-5 py-3 border-bottom border-light position-relative">
      <div className="floating-cntr">
        {/* <span className="rounded-btn bg-light" onClick={() => onEdit(todo._id)}>
          <i className="material-icons text-primary mr-4">edit</i>
        </span> */}
        <span className="rounded-btn bg-light" onClick={() => onDelete(todo._id)}>
          <i className="material-icons text-danger mr-4">close</i>
        </span>
      </div>
      <h6 className="mb-0 font-weight-bold cursor-pointer d-flex align-items-center">

        <span className={(todo.active ? 'text-primary' : 'text-success')}>
          <i className="material-icons md-36 mr-2" onClick={() => onUpdate(todo)}>
            {todo.active ? 'check_box_outline_blank' : 'check_box'}
          </i>
        </span>
        <span className={(todo.active ? 'text-primary' : 'text-extra-muted')} onClick={() => todo.active && onEdit(todo._id)}>{todo.title}</span>

        {/* <small>
          <small className="float-right">
            <Moment format="DD MMM YYYY">
              {todo.createdOn}
            </Moment>
          </small>
        </small> */}
      </h6>
      {/* <p className="mb-0"><small className="text-extra-muted text-uppercase"><small>{todo.type}</small></small></p> */}
    </div>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ToDoItem;
