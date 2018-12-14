import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListRow = ({ course, onDelete }) => {
  return (
    <div className="col-md-12 d-flex p-0">
      <div className={course.title == 'Do you have any user feedback that you can share with us?' ? 'card border-0 p-4' : 'card bg-transparent border-0 p-4'}>
        <h6 className="font-weight-normal text-capitalize text-muted course-title">
          <Link to={'/course/' + course._id}>{course.title}</Link>
        </h6>

        <div className="badges mt-2">
          <span className="badge badge-pill badge-light d-inline-block"><small>HEALTHCARE</small></span>
          <span className="badge badge-pill badge-light d-inline-block"><small>FINANCE</small></span>
        </div>
        {/* <span onClick={() => onDelete(course._id)}><i class="material-icons text-muted">
          delete_outline
            </i></span> */}
      </div>
    </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
