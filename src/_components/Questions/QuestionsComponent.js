import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import QuestionList from './QuestionList';
import toastr from 'toastr';


class QuestionsComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddQuestionPage = this.redirectToAddQuestionPage.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  redirectToAddQuestionPage() {
    this.props.history.push('/question');
  }

  deleteQuestion(questionId) {
    this.props.actions.deleteQuestion(questionId)
      .then(() => { toastr.success('Deleted question successfully'); })
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  render() {
    const { questions } = this.props;
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-5 full-height-container question-type-section p-0">
            <div className="top-header tabs border-bottom px-5">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#"><small>STAKEHOLDER</small></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><small>USER</small></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><small>ALL</small></a>
                </li>
              </ul>
            </div>
            <div className="scroll-cntr scollable">
              {/* <div className="px-5 py-3 border-bottom">
              <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
              <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
              <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
            </div> */}
              <div className="px-5 py-4 border-bottom">
                <button className="btn btn-secondary"><small>PREPARE QUESTIONNAIRE</small></button>
              </div>

              <div className="card bg-transparent border-bottom px-5 py-4">
                <div className="floating-cntr">
                  <span className="rounded-btn border border-dark floated" onClick={this.redirectToAddQuestionPage}>
                    <i className="material-icons text-dark mr-4">
                      add
                  </i>
                  </span>
                </div>
                <h1 className="font-weight-light custom-font text-extra-muted">{questions.length}</h1>
                <h6 className="display-5 text-extra-muted">All Stakeholder Interview <br />Questions</h6>

                {/* <p className="mt-4 mb-0"><span className="h4">04</span> <small className="text-white-50">General</small></p> */}
              </div>
              <div className="card px-5 py-4 border-bottom">
                <div className="floating-cntr">
                  {/* <span className="rounded-btn bg-secondary floated">
                  <i className="material-icons text-white mr-4">
                    speaker_notes
                  </i>
                </span> */}
                  <span className="rounded-btn bg-primary floated" onClick={this.redirectToAddQuestionPage}>
                    <i className="material-icons text-white mr-4">
                      add
                  </i>
                  </span>
                </div>
                <h1 className="display-4 font-weight-light custom-font text-primary">12</h1>
                <h6 className="text-primary" >General Interview <br />Questions</h6>
              </div>
              <div className="card bg-transparent border-bottom px-5 py-4">
                <div className="floating-cntr">
                  <span className="rounded-btn border border-dark floated">
                    <i className="material-icons text-dark mr-4">
                      add
                  </i>
                  </span>
                </div>
                <h1 className="font-weight-light custom-font text-extra-muted">12</h1>
                <h6 className="text-extra-muted" >Branding Interview <br />Questions</h6>
              </div>
            </div>

          </div>

          <div className="col-7 full-height-container questions-section p-0">
            <div className="px-3">

              {/* <input type="submit"
                value="Add Question"
                className="btn btn-primary mb-3"
                onClick={this.redirectToAddQuestionPage} /> */}
              <QuestionList questions={questions} onDelete={this.deleteQuestion} />
            </div>
          </div>
          <div className="col-6 full-height-container p-0 d-none">
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
                  {/* <i className="material-icons text-primary mr-4">
                    edit
                  </i> */}
                  <i className="material-icons text-danger">
                    delete
                </i>
                </div></div>
            </div>
            <div className="p-5">

              <h3 className="font-weight-light text-muted my-4">Do You Have Any User Feedback That You Can Share With Us?</h3>
              <span className="badge badge-pill badge-border bg-light d-inline-block px-3 py-2 font-weight-normal text-muted">HEALTHCARE</span>
              <span className="badge badge-pill badge-border bg-light d-inline-block px-3 py-2 font-weight-normal text-muted">FINANCE</span>
            </div>

            <div className="px-5">
              <button className="btn btn-primary"><small>EDIT</small></button>
              {/* <button className="btn btn-secondary"><small>DELETE</small></button> */}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

QuestionsComponent.propTypes = {
  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(QuestionsComponent);
export { connectedApp as QuestionsComponent };
