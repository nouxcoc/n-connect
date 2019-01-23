import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const QuestionListRow = ({ question, onDelete, confirmDelete, cancelDelete, onEdit, selectedToDelete, selectedId }) => {
  return (
    <div className="col-md-12 d-flex p-0 p-relative">
      <div className="floating-cntr mt-2">
        {/* <Link className="rounded-btn bg-light" to={'/question/' + question._id}><i className="material-icons text-primary mr-4">edit</i></Link> */}
        <span className="rounded-btn bg-light" onClick={() => onEdit(question._id)}>
          <i className="material-icons text-primary mr-4">edit</i>
        </span>
        <span className="rounded-btn bg-light" onClick={() => confirmDelete(question._id)}>
          <i className="material-icons text-danger mr-4">delete</i>
        </span>
        {/* <span className="rounded-btn bg-light">
          <i class="material-icons">more_horiz</i>
        </span> */}
      </div>
      <div className='card border-0 p-4'>
        <div className="badges mb-3 text-uppercase">
          <span className="badge badge-pill badge-light d-inline-block mr-1"><small className={"font-weight-bold " + (question.type == 'user' ? 'text-danger' : 'text-primary')}>{question.type}</small></span>
          <span className="badge badge-pill badge-light d-inline-block mr-1"><small className="text-extra-muted font-weight-bold">{question.categoryId}</small></span>
        </div>
        <small className="text-extra-muted text-uppercase">
          <small>
            CREATED BY :
          </small>
          <small className="pl-3">{question.createdBy}</small>
          <small className="px-3">|</small>
          <small>
            <Moment format="DD MMM YYYY">
              {question.createdOn}
            </Moment>
          </small>
        </small>
        <h6 className="mb-0 font-weight-normal text-muted question-title">
          {question.title}
        </h6>
      </div>
      {selectedToDelete && selectedId == question._id ?
        <div className="delete-confirmation p-4 border-bottom">
          <h6 className="mb-3 font-weight-normal text-secondary question-title">
            Are you sure you want to permanently Delete this Question?
        </h6>
          <span className="btn btn-sm btn-primary mr-2" onClick={() => cancelDelete()}>NO</span>
          <span className="btn btn-sm btn-danger" onClick={() => onDelete(question._id)}>DELETE</span>
        </div> : null
      }
    </div >
  );
};

QuestionListRow.propTypes = {
  question: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default QuestionListRow;
