import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ToDoComponent extends React.Component {
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        //return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="card rounded">
                <h2 className="mb-0 custom-font font-weight-light display-5 px-5 pt-4">TO-DO</h2>
                <div className="top-header tabs border-bottom px-5">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><small>ACTIVE</small></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><small>DONE</small></a>
                        </li>
                    </ul>
                </div>
                <div className="px-5 py-4 border-bottom border-light">
                    <h6 className="mb-0 font-weight-bold text-primary">Create Design Document for Fitch</h6>
                    <p className="mb-0"><small className="text-extra-muted">Active Projects</small></p>
                </div>
                <div className="px-5 py-4 border-bottom border-light">
                    <h6 className="mb-0 font-weight-bold text-primary">Create Design Document for Fitch</h6>
                    <p className="mb-0"><small className="text-extra-muted">Active Projects</small></p>
                </div>
                <div className="px-5 py-4">
                    <h6 className="mb-0 font-weight-bold text-primary">Create Design Document for Fitch</h6>
                    <p className="mb-0"><small className="text-extra-muted">Active Projects</small></p>
                </div>
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

const connectedHomePage = connect(mapStateToProps)(ToDoComponent);
export { connectedHomePage as ToDoComponent };