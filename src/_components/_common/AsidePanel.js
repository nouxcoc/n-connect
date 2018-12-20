import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatComponent } from '../Chat/ChatComponent';

class AsidePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="aside-panel">
        <div className="top-header aside-tabs border-bottom">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="material-icons">
                  chat_bubble_outline
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="material-icons">
                  playlist_add_check
                </i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="material-icons">
                  tune
                </i>
              </a>
            </li>
          </ul>
        </div>
        <ChatComponent />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedApp = connect(mapStateToProps)(AsidePanel);
export { connectedApp as AsidePanel };

