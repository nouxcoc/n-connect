import React from 'react';
import PropTypes from 'prop-types';
import QuestionListRow from './QuestionListRow';

const QuestionList = ({ questions, onDelete }) => {
  return (
    <div className="row d-flex">

      <div className="col-12 p-0 border-bottom border-light">
        <div className="top-header border-bottom border-light px-4 pt-2">
          {/* <div className="row mt-1">
            <div className="col-6">
              <input type="text" placeholder="Search Question" autoComplete="off" className="form-control" name="username" value="" />
            </div>
            <div className="col-6 text-right">
              <p className="py-2 text-primary"><small className="font-weight-bold">24 RESULTS FOUND</small></p>
            </div>
          </div> */}
          <div className="row mt-2">
            <div className="col-3">
              <button className="btn btn-outline-secondary"><small>CANCEL</small></button>
            </div>
            <div className="col-6 text-center p-0">
              <h6 className="display-5 text-extra-muted mt-2">26 Questions Selected</h6>
            </div>
            <div className="col-3 text-right">
              <button className="btn btn-primary pull-right"><small>NEXT</small></button>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cntr scollable">
        <div className="col-12 border-bottom border-light px-4 py-3">
          <h5 className="mb-0 text-muted font-weight-bold">GENERAL</h5>
        </div>
        {questions.map(question =>
          <QuestionListRow key={question._id} question={question} onDelete={onDelete} />
        )}
      </div>
    </div>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default QuestionList;
