import React from 'react';
import PropTypes from 'prop-types';
import QuestionListRow from './QuestionListRow';

const QuestionList = ({ questions, onDelete, confirmDelete, cancelDelete, onEdit, selectedToDelete, selectedId }) => {
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
        {questions.map(group =>
          <div key={group[0]._id}>
            <div className="col-12 bg-light px-4 py-3">
              <h6 className="mb-0 text-muted font-weight-bold">{group[0].categoryId}</h6>
            </div>
            {group.map(question =>
              <QuestionListRow key={question._id}
                onEdit={onEdit}
                question={question}
                selectedId={selectedId}
                selectedToDelete={selectedToDelete}
                onDelete={onDelete}
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete} />
            )}
          </div>
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
