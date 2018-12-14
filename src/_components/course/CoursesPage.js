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
      <div className="dashboard-container">
        <div className="row">
          <div className="col-3 full-height-container bg-dark p-0">
            <div className="card bg-primary p-4 text-white">
              <h1 className="display-3">12</h1>
              <h6 className="display-5">STAKEHOLDER INTERVIEW <br />QUESTIONS</h6>
            </div>
            <div className="card bg-transparent p-4 mt-4 text-white">
              <h1 className="display-4">12</h1>
              <h6 className="text-primary" >USER INTERVIEW <br />QUESTIONS</h6>
            </div>
          </div>
          <div className="col-3 full-height-container questions-section">
            <div>
              
              {/* <input type="submit"
                value="Add Course"
                className="btn btn-primary mb-3"
                onClick={this.redirectToAddCoursePage} /> */}
              <CourseList courses={courses} onDelete={this.deleteCourse} />
            </div>
          </div>
          <div className="col-5 full-height-container p-5">
            <span className="badge badge-pill badge-border d-inline-block px-3 py-2 font-weight-normal text-muted">HEALTHCARE</span>
            <span className="badge badge-pill badge-border d-inline-block px-3 py-2 font-weight-normal text-muted">FINANCE</span>
            <i class="material-icons text-muted">
              delete_outline
            </i>
            <h3 className="font-weight-light text-muted my-4">Do You Have Any User Feedback That You Can Share With Us?</h3>
            <p>You're logged in with React!!</p>
            <div>
              <button className="btn btn-primary btn-lg"><small>EDIT</small></button>
              <button className="btn btn-danger btn-lg"><small>DELETE</small></button>
            </div>
          </div>
        </div>
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
