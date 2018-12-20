import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messageActions from '../../actions/messageActions';
import MessageForm from './MessageForm';
import toastr from 'toastr';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:3000');
// import axios from 'axios';

class ManageChatMessage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      message: Object.assign({}, props.message),
      errors: {},
      saving: false,
    };

    this.updateMessageState = this.updateMessageState.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.message.id != nextProps.message.id) {
      // Necessary to populate form when existing question is loaded directly.
      this.setState({ message: Object.assign({}, nextProps.message) });
    }
  }



  updateMessageState(event) {
    const field = event.target.name;
    let message = Object.assign({}, this.state.message);
    message[field] = event.target.value;
    return this.setState({ message: message });
  }

  messageFormIsValid() {
    let formIsValid = this.state.message.msg.length > 1 ? true : false;
    return formIsValid;
  }


  sendMessage(event) {
    event.preventDefault();

    if (!this.messageFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    let message = {
      msg: this.state.message.msg,
      user: this.props.user.name,
      time: new Date()
    }
    if (this.state.message._id) {
      this.props.actions.updateQuestion(message)
        .then(() => {
          this.resetChatForm(message);
        })
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }
    else {
      this.props.actions.sendMessage(message)
        .then(() => {
          this.resetChatForm(message);
        })
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }
  }

  resetChatForm(message) {
    socket.emit('message', message);
    this.setState({
      saving: false,
      message: { msg: '', user: '', time: '' }
    });
  }

  render() {
    return (
      <MessageForm
        allAuthors={this.props.authors}
        onChange={this.updateMessageState}
        onSave={this.sendMessage}
        message={this.state.message}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageChatMessage.contextTypes = {
  router: PropTypes.object
};

function getQuestionById(questions, id) {
  const message = questions.filter(message => message._id == id);
  if (message.length) return message[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const { user } = state.authentication.user;
  let message = { msg: '', user: '', time: '' };
  return {
    user: user,
    message: message
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ManageChatMessage);
export { connectedApp as ManageChatMessage };
