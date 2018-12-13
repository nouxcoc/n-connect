import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
// import { browserHistory } from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);

    
  }

  redirectToAddCoursePage() {
    this.props.history.push('/course');
  }

  deleteCourse(courseId) {
    this.props.actions.deleteCourse(courseId)
      .then(() => { toastr.success('Deleted course successfully'); })
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  render() {
    const { courses } = this.props;

    console.log(this.props);

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
          value="Add Course"
          className="btn btn-primary mb-3"
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} onDelete={this.deleteCourse} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export { connectedApp as CoursesPage };
