import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListRow = ({ course, onDelete }) => {
  return (
    <div className="col-md-3 d-flex mb-4">
      <div className="card border-0 p-4">
        <h6 className="font-weight-normal text-capitalize text-muted">
          <Link to={'/course/' + course._id}>{course.title}</Link>
        </h6>

        <div className="badges mt-2">
          <span className="badge badge-pill badge-light d-inline-block"><small>HEALTHCARE</small></span>
          <span className="badge badge-pill badge-light d-inline-block"><small>FINANCE</small></span>
        </div>
        <span onClick={() => onDelete(course._id)}>Delete</span>
      </div>
    </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
