import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import * as messageActions from '../../actions/messageActions';
import toastr from 'toastr';
import { ManageChatMessage } from './ManageChatMessage';
import _ from "lodash";

import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:3000');


class ChatComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedChat: { msg: "", user: "", time: "" }
    };

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

  deleteChat = (messageId) => {
    this.props.actions.deleteMessage(messageId)
      .then(() => {
        socket.emit('message', messageId);
      })
      .catch(error => {
        toastr.error(error);
      });
  }


  getMessageById(messages, id) {
    const message = messages.filter(message => message._id === id);
    if (message.length) return message[0]; //since filter returns an array, have to grab the first.
    return null;
  }

  render() {
    const { messages, user } = this.props;
    //const { selectedChat } = this.state;
    return (
      <div>
        <div className="chat-scroll-cntr scollable">
          <div className="px-4 py-2">
            {messages.map(group =>
              <div key={group[0]._id} className="my-4">
                <small className="text-extra-muted">
                  <small><Moment format="DD MMM YY">
                    {group[0].time}
                  </Moment>
                  </small>
                </small>
                {group.map(chat =>
                  <div key={chat._id} className="message-cntr">
                    <div className="rounded-circle user-info bg-secondary">
                      <img src={'/users/' + chat.user + '.jpg'} alt="" />
                    </div>
                    <div className="desc text-muted">
                      <small className="d-block">
                        <span className={user.user.name === chat.user ? 'text-capitalize text-primary font-weight-bold' : 'text-capitalize font-weight-bold'}>{chat.user}</span>
                        <small className="text-extra-muted float-right ml-3">
                          <Moment format="HH:mm">
                            {chat.time}
                          </Moment></small>
                      </small>
                      <small className={user.user.name === chat.user ? 'text-dark' : ''}>{chat.msg}</small>
                    </div>
                    {user.user.name === chat.user ? <div className="floating-cntr mt-2">
                      <span className="rounded-btn bg-light" onClick={() => this.deleteChat(chat._id)}>
                        <i className="material-icons text-danger">delete</i>
                      </span>
                    </div> : null}

                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <ManageChatMessage />
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
  let groupedMessages = _.map(_.groupBy(messages, function (i) {
    let filterDate = new Date(i.time).setHours(0, 0, 0, 0);
    return filterDate;
  }));
  return {
    user,
    messages: groupedMessages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ChatComponent);
export { connectedApp as ChatComponent };
