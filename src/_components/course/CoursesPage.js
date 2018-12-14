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
            <div className="card bg-primary px-5 py-4 text-white">
              <h1 className="display-4">24</h1>
              <h6 className="display-5 text-white-50">All Interview <br />Questions</h6>

              {/* <p className="mt-4 mb-0"><span className="h4">04</span> <small className="text-white-50">General</small></p> */}
            </div>
            <div className="card bg-transparent px-5 py-4 border-bottom border-dark text-white">
              <h2 className="text-white-50">12</h2>
              <h6 className="text-white-50" >Stakeholder Interview <br />Questions</h6>
            </div>
            <div className="card bg-transparent px-5 py-4 text-white">
              <h2 className="text-white-50">12</h2>
              <h6 className="text-white-50" >User Interview <br />Questions</h6>
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
          <div className="col-6 full-height-container p-0">
            <div className="px-5 py-4 border-bottom">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <small className="text-extra-muted">Last modified on : 12 DEC 2018</small>
                  {/* <i className="material-icons text-muted">
                    title
                  </i> */}
                  {/* <i class="material-icons text-muted">
                    radio_button_checked
                  </i> */}
                  {/* <span className="text-muted ml-2">RADIO OPTIONS</span> */}
                </div>
                <div className="col-6 text-right">
                  <i className="material-icons text-primary mr-4">
                    edit
                  </i>
                  <i className="material-icons text-danger">
                    delete_outline
                </i>
                </div></div>
            </div>
            <div className="p-5">

              <h3 className="font-weight-light text-muted my-4">Do You Have Any User Feedback That You Can Share With Us?</h3>
              <span className="badge badge-pill badge-border bg-light d-inline-block px-3 py-2 font-weight-normal text-muted">HEALTHCARE</span>
              <span className="badge badge-pill badge-border bg-light d-inline-block px-3 py-2 font-weight-normal text-muted">FINANCE</span>
            </div>

            {/* <div className="p-5">
              <button className="btn btn-primary btn-lg"><small>EDIT</small></button>
              <button className="btn btn-secondary btn-lg"><small>DELETE</small></button>
            </div> */}

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
