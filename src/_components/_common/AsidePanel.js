import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:3000');

class AsidePanel extends Component {
  constructor(props) {
    super(props);
    this.state ={
      socketmessage : "Welcome"
    }

    console.log("data");

    socket.on("MessageFromSocket", data => {
      
      this.setState({socketmessage : data});
    });

  }

  render() {
    return (
      <div className="aside-panel">
        {this.state.socketmessage}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(AsidePanel);
export { connectedApp as AsidePanel }; 

