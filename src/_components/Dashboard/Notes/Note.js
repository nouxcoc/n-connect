import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const Note = ({ note, onEdit, onDelete, onCopy }) => {
  return (
    <div className="px-4 py-3 border-bottom border-light position-relative">
      <div className="floating-cntr">
        <Tooltip title="Remove" placement="top">
          <IconButton aria-label="Copy" onClick={() => onDelete(note._id)}>
            <Icon className="text-extra-muted">close</Icon>
          </IconButton>
        </Tooltip>
      </div>
      <h6 className="mb-0 pr-5 font-weight-bold d-flex align-items-center">
        <Tooltip title="Copy to Clipboard" placement="top">
          <IconButton aria-label="Copy" onClick={(e) => { navigator.clipboard.writeText(note.title) }}>
            <Icon className="text-extra-muted">library_books</Icon>
          </IconButton>
        </Tooltip>
        {note.type === 'url' ? <a href={note.title} target="_blank">
          <Tooltip title="Open" placement="top">
            <IconButton aria-label="Open">
              <Icon className="text-success"> open_in_new</Icon>
            </IconButton>
          </Tooltip>
        </a> :
          null}
        <span className="text-primary ml-2 myInput" onClick={() => onEdit(note._id)}>
          {note.title}
          <small className="text-extra-muted d-block text-uppercase"><small>{note.label}</small></small>
        </span>
      </h6>
      {/* <p className="mb-0"><small className="text-extra-muted text-uppercase"><small>{note.type}</small></small></p> */}
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;
