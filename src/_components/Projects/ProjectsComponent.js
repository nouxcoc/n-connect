import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class ProjectsComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-4 full-height-container bg-light p-0">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><small>PROJECTS</small></a>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll-cntr scrollable">
                            <div className="px-5 py-4 border-bottom border-med-light">
                                <button className="btn btn-secondary"><small>ADD NEW</small></button>
                            </div>

                            <div className="card bg-transparent border-bottom border-med-light px-5 py-4">
                                <h2 className="font-weight-bold text-extra-muted">HME</h2>
                                <h6 className="display-5 text-extra-muted">All Stakeholder Interview <br />Questions</h6>

                                {/* <p className="mt-4 mb-0"><span className="h4">04</span> <small className="text-white-50">General</small></p> */}
                            </div>
                            <div className="card px-5 py-4 border-bottom border-med-light">
                                <h2 className="font-weight-bold text-primary">FITCH</h2>
                                <h6 className="text-primary" >General Interview <br />Questions</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 full-height-container p-0">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"><small>DETAILS</small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><small>REVIEWS</small></a>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll-cntr scollable">
                            <div className="p-5">
                                <h1 className="display-4">Projects</h1>
                                <h2>{user.user.name}</h2>
                            </div>
                        </div>

                    </div>
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

const connectedHomePage = connect(mapStateToProps)(ProjectsComponent);
export { connectedHomePage as ProjectsComponent };