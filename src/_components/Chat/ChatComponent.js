import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import * as messageActions from '../../actions/messageActions';
import toastr from 'toastr';
import { ManageChatMessage } from './ManageChatMessage';

import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:3000');


class ChatComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedChat: {
        msg: "",
        user: "",
        time: ""
      }
    };

    this.deleteChat = this.deleteChat.bind(this);
    this.editChat = this.editChat.bind(this);
    this.updateChat();
  }

  updateChat() {
    socket.on("ChatUpdate", data => {
      this.props.actions.loadMessages(data)
        .then(() => {
          // TODO  : UPDATE LOGIC
        })
        .catch(error => {
        });
    });
  }

  deleteChat(messageId) {
    this.props.actions.deleteMessage(messageId)
      .then(() => {
        socket.emit('message', messageId);
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  editChat(messageId) {
    let message;
    if (messageId && this.props.messages.length > 0) {
      message = this.getMessageById(this.props.messages, messageId);
    }
    this.setState({
      selectedChat : message
    })
  }

  getMessageById(messages, id) {
    const message = messages.filter(message => message._id == id);
    if (message.length) return message[0]; //since filter returns an array, have to grab the first.
    return null;
  }

  render() {
    const { messages, user } = this.props;
    //const { selectedChat } = this.state;
    return (
      <div>
        <div className="chat-scroll-cntr scollable">
          <div className="p-4">
            {messages.map(message =>
              <div key={message._id} className="message-cntr">
                <div className="rounded-circle user-info bg-secondary">
                  <img src={'/users/' + message.user + '.jpg'} />
                </div>
                <div className="desc text-muted">
                  <small className="d-block">
                    <span className={user.user.name == message.user ? 'text-capitalize text-primary font-weight-bold' : 'text-capitalize font-weight-bold'}>{message.user}</span>
                    <small className="text-extra-muted ml-3">
                      <Moment format="HH:mm">
                        {message.time}
                      </Moment></small>
                  </small>
                  <small className={user.user.name == message.user ? 'text-dark' : ''}>{message.msg}</small>
                </div>
                {user.user.name == message.user ? <div className="floating-cntr mt-2">
                  <span className="rounded-btn bg-light" onClick={() => this.deleteChat(message._id)}>
                    <i className="material-icons text-danger">delete</i>
                  </span>
                  <span className="rounded-btn bg-light" onClick={() => this.editChat(message._id)}>
                    <i className="material-icons text-primary">edit</i>
                  </span>
                </div> : null}

              </div>
            )}
          </div>
        </div>
        <ManageChatMessage selectedChat={this.state.selectedChat} />
      </div>
    );
  }
}

ChatComponent.propTypes = {
  messages: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const { authentication, messages } = state;
  const { user } = authentication;
  return {
    user, messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
export { connectedApp as ChatComponent };
