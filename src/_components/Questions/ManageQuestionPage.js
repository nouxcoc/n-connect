import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import QuestionForm from './QuestionForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:3000');
// import axios from 'axios';

class ManageQuestionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      question: Object.assign({}, props.question),
      errors: {},
      saving: false,
    };

    this.updateQuestionState = this.updateQuestionState.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.question.id != nextProps.question.id) {
      // Necessary to populate form when existing question is loaded directly.
      this.setState({ question: Object.assign({}, nextProps.question) });
    }
  }



  updateQuestionState(event) {
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


  saveQuestion(event) {
    
    event.preventDefault();

    if (!this.questionFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    if (this.state.question._id) {
      this.props.actions.updateQuestion(this.state.question)
        .then(() => {
          this.redirect();
          socket.emit('message', this.props.question.title);
        })
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }
    else {
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
    this.props.history.push('/questions');
  }

  render() {
    return (
      <QuestionForm
        allAuthors={this.props.authors}
        onChange={this.updateQuestionState}
        onSave={this.saveQuestion}
        question={this.state.question}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageQuestionPage.propTypes = {
  question: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageQuestionPage.contextTypes = {
  router: PropTypes.object
};

function getQuestionById(questions, id) {
  const question = questions.filter(question => question._id == id);
  if (question.length) return question[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const questionId = ownProps.match.params.id; // from the path `/question/:id`

  let question = { watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (questionId && state.questions.length > 0) {
    question = getQuestionById(state.questions, questionId);
  }

  return {
    question: question,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ManageQuestionPage);
export { connectedApp as ManageQuestionPage };
