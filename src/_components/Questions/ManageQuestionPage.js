import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import QuestionForm from './QuestionForm';
import { categoriesFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';
// import socketIOClient from "socket.io-client";
//const socket = socketIOClient('http://localhost:3000');
// import axios from 'axios';

class ManageQuestionPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      question: Object.assign({}, props.question),
      errors: {},
      saving: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    let prev = this.getQuestionById(this.props.questions, this.props.selectedId),
      nxt = this.getQuestionById(nextProps.questions, nextProps.selectedId);
    if (nxt && prev !== nxt) {
      this.setState({ question: Object.assign({}, nxt), errors: {} });
    }
    else {
      let q = { categoryId: '', title: '', type: 'stakeholder' }
      this.setState({ question: Object.assign({}, q), errors: {} });
    }
  }

  getQuestionById(questions, id) {
    const question = questions.filter(question => question._id === id);
    if (question.length) return question[0]; //since filter returns an array, have to grab the first.
    return null;
  }

  updateQuestionState = (event) => {
    const field = event.target.name;
    let question = Object.assign({}, this.state.question);
    question[field] = event.target.value;
    return this.setState({ question: question });
  }

  questionFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.question.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  saveQuestion = (event) => {
    event.preventDefault();

    if (!this.questionFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    if (this.state.question._id) {
      this.setState({ question: {
        updatedOn : new Date(),
        updatedBy : this.props.user.name
      } });
      this.props.actions.updateQuestion(this.state.question)
        .then(() => {
          this.redirect();
        })
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }
    else {
      this.setState({ question: {
        createdOn : new Date(),
        createdBy : this.props.user.name
      } });
      this.props.actions.saveQuestion(this.state.question)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }

  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Question saved');
    this.props.onHideEdit();
  }

  render() {
    return (
      <div className="question-edit-cntr">
        <div className="top-header border-bottom border-med-light px-4 pt-2">
          <div className="row mt-2">
            <div className="col-12 px-4">
              <h6 className="display-5 text-extra-muted font-weight-bold mt-2"> &nbsp;+ ADD NEW QUESTION</h6>
            </div>
          </div>
        </div>
        <div className="form-cntr p-4">
          <QuestionForm
            allCategories={this.props.categories}
            onChange={this.updateQuestionState}
            onSave={this.saveQuestion}
            question={this.state.question}
            errors={this.state.errors}
            saving={this.state.saving}
            onHideEdit={this.props.onHideEdit}
          />
        </div>
      </div>
    );
  }
}

ManageQuestionPage.propTypes = {
  question: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageQuestionPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { user } = state.authentication.user;
  let question = { categoryId: '', title: '', type: 'stakeholder' };
  return {
    user: user,
    question: question,
    questions: state.questions,
    categories: categoriesFormattedForDropdown(state.categories)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ManageQuestionPage);
export { connectedApp as ManageQuestionPage };
