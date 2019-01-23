import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Note = ({ note, onEdit, onDelete }) => {
  return (
    <div className="px-5 py-3 border-bottom border-light position-relative">
      <div className="floating-cntr">
        {/* <span className="rounded-btn bg-light" onClick={() => onEdit(note._id)}>
          <i className="material-icons text-primary mr-4">edit</i>
        </span> */}
        <span className="rounded-btn bg-light" onClick={() => onDelete(note._id)}>
          <i className="material-icons text-danger mr-4">close</i>
        </span>
      </div>
      <h6 className="mb-0 pr-5 font-weight-bold text-primary cursor-pointer d-flex align-items-center" onClick={() => onEdit(note._id)}>
        {note.title}
      </h6>
      <p className="mb-0"><small className="text-extra-muted text-uppercase"><small>{note.type}</small></small></p>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;
