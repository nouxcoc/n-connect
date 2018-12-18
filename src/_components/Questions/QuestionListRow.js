import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuestionListRow = ({ question, onDelete }) => {
  return (
    <div className="col-md-12 d-flex p-0">
      <div className="floating-cntr mt-2">
        <span className="rounded-btn bg-light">
          <i className="material-icons text-primary mr-4">edit</i>
        </span>
        <span className="rounded-btn bg-light">
          <i className="material-icons text-danger mr-4">delete</i>
        </span>
        {/* <span className="rounded-btn bg-light">
          <i class="material-icons">more_horiz</i>
        </span> */}
      </div>
      <div className={question.title == 'Do you have any user feedback that you can share with us?' ? 'card border-0 p-4' : 'card bg-transparent border-0 p-4'}>
        <div className="badges mb-3">
          <span className="badge badge-pill badge-light d-inline-block mr-1"><small className="text-primary font-weight-bold">STAKEHOLDER</small></span>
          <span className="badge badge-pill badge-light d-inline-block mr-1"><small className="text-extra-muted font-weight-bold">GENERAL</small></span>
        </div>
        <small className="text-extra-muted"><small>UPDATED ON : 12 DEC 2018</small></small>
        <h6 className="mb-0 font-weight-normal text-capitalize text-muted question-title">
          <Link to={'/question/' + question._id}>{question.title}</Link>
        </h6>
        
        {/* <span onClick={() => onDelete(question._id)}><i class="material-icons text-muted">
          delete_outline
            </i></span> */}
      </div>
    </div>
  );
};

QuestionListRow.propTypes = {
  question: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default QuestionListRow;
