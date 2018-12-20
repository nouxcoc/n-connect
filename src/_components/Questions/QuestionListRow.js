import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuestionListRow = ({ question, onDelete }) => {
  return (
    <div className="col-md-12 d-flex p-0">
      <div className="floating-cntr mt-2">
        <Link className="rounded-btn bg-light" to={'/question/' + question._id}><i className="material-icons text-primary mr-4">edit</i></Link>
        <span className="rounded-btn bg-light" onClick={() => onDelete(question._id)}>
          <i className="material-icons text-danger mr-4">delete</i>
        </span>
        {/* <span className="rounded-btn bg-light">
          <i class="material-icons">more_horiz</i>
        </span> */}
      </div>
      <div className='card border-0 p-4'>
        <div className="badges mb-3">
          <span className="badge badge-pill badge-light d-inline-block mr-1"><small className="text-primary font-weight-bold">STAKEHOLDER</small></span>
          <span className="badge badge-pill badge-light d-inline-block mr-1"><small className="text-extra-muted font-weight-bold">GENERAL</small></span>
        </div>
        <small className="text-extra-muted"><small>UPDATED ON : 12 DEC 2018</small></small>
        <h6 className="mb-0 font-weight-normal text-capitalize text-muted question-title">
          <Link to={'/question/' + question._id}>{question.title}</Link>
        </h6>
      </div>
    </div>
  );
};

QuestionListRow.propTypes = {
  question: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default QuestionListRow;
