import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import QuestionList from './QuestionList';
import toastr from 'toastr';
import _ from "lodash";
import { ManageQuestionPage } from './ManageQuestionPage';


class QuestionsComponent extends React.Component {
  state = {
    addEditActive: false,
    selectedToDelete: false,
    questionId: ''
  };

  addEditQuestion = (questionId) => {
    this.setState({ addEditActive: true, selectedId: questionId ? questionId : null });
  }

  hideEditing = () => {
    this.setState({ addEditActive: false });
  }

  confirmDeleteQuestion = (questionId) => {
    this.setState({ selectedToDelete: true, selectedId: questionId });
  }

  cancelDeleteQuestion = () => {
    this.setState({ selectedToDelete: false, selectedId: null });
  }

  deleteQuestion = (questionId) => {
    this.props.actions.deleteQuestion(questionId)
      .then(() => { toastr.success('Deleted question successfully'); })
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
        this.setState({ selectedToDelete: false, selectedId: null });
      });
  }

  render() {
    const { questions, stakeHolderQuestions, userQuestions } = this.props;
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-4 full-height-container question-type-section p-0">
            <div className="top-header border-bottom px-4 pt-2">
              <div className="row mt-2">
                <div className="col-12">
                  <button className="btn btn-secondary"><small>PREPARE QUESTIONNAIRE</small></button>
                </div>
              </div>
            </div>

            <div className="scroll-cntr scollable">
              {/* <div className="px-5 py-3 border-bottom">
                <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
              </div> */}

              {/* <div className="card bg-transparent border-bottom border-med-light px-5 py-4">
                <h1 className="font-weight-bold custom-font text-extra-muted">{stakeHolderQuestions.length + userQuestions.length}</h1>
                <h6 className="display-5 text-extra-muted">All Interview Questions</h6>
              </div> */}
              <div className="card px-5 py-4 bg-primary border-bottom border-med-light">
                <div className="floating-cntr">
                  {/* <span className="rounded-btn bg-secondary floated">
                  <i className="material-icons text-white mr-4">
                    speaker_notes
                  </i>
                </span> */}
                  <span className={"rounded-btn bg-primary floated " + (this.state.addEditActive ? 'disabled' : '')} onClick={this.addEditQuestion}>
                    <i className="material-icons text-white mr-4">
                      add
                  </i>
                  </span>
                </div>
                <h1 className="font-weight-bold custom-font text-white">{stakeHolderQuestions.length}</h1>
                <h6 className="text-white" >Stakeholder Interview Questions</h6>
                <div className="mt-2">
                  <span className="badge badge-pill badge-border text-white">BRANDING</span>
                  <span className="badge badge-pill badge-border text-white">GENERAL</span>
                  <span className="badge badge-pill badge-border text-white">TARGET AUDIENCE</span>
                  <span className="badge badge-pill badge-border text-white">COMPETITION</span>
                  <span className="badge badge-pill badge-border text-white">LOCALIZATION</span>
                </div>
              </div>
              <div className="card bg-transparent border-bottom border-med-light px-5 py-4">
                <div className="floating-cntr">
                  <span className={"rounded-btn border border-dark floated " + (this.state.addEditActive ? 'disabled' : '')} onClick={this.addEditQuestion}>
                    <i className="material-icons text-dark mr-4">
                      add
                  </i>
                  </span>
                </div>
                <h1 className="font-weight-bold custom-font text-extra-muted">{userQuestions.length}</h1>
                <h6 className="text-extra-muted" >User Interview Questions</h6>
                <div className="mt-2">
                  <span className="badge badge-pill badge-border text-muted">BRANDING</span>
                  <span className="badge badge-pill badge-border text-muted">GENERAL</span>
                  <span className="badge badge-pill badge-border text-muted">TARGET AUDIENCE</span>
                  <span className="badge badge-pill badge-border text-muted">COMPETITION</span>
                  <span className="badge badge-pill badge-border text-muted">LOCALIZATION</span>
                </div>
              </div>
            </div>
          </div>

          <div className={"col-8 full-height-container questions-section p-0 " + (this.state.addEditActive ? 'question-edit-active' : '')}>
            <ManageQuestionPage selectedId={this.state.selectedId} onHideEdit={this.hideEditing} />
            <div className="px-0">
              <QuestionList onEdit={this.addEditQuestion}
                selectedId={this.state.selectedId}
                selectedToDelete={this.state.selectedToDelete}
                questions={questions}
                onDelete={this.deleteQuestion}
                cancelDelete={this.cancelDeleteQuestion}
                confirmDelete={this.confirmDeleteQuestion} />
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
  const stakeHolderQuestions = state.questions.filter(question => question.type == 'stakeholder');
  const userQuestions = state.questions.filter(question => question.type == 'user');
  const groupedQuestions = _.map(_.groupBy(state.questions, 'categoryId'));
  return {
    questions: groupedQuestions,
    stakeHolderQuestions,
    userQuestions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(QuestionsComponent);
export { connectedApp as QuestionsComponent };
