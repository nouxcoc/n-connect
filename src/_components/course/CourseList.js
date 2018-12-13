import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses, onDelete }) => {
  console.log(courses);
  return (
    <div className="row d-flex">
      {courses.map(course =>
        <CourseListRow key={course._id} course={course} onDelete={onDelete} />
      )}
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseList;
