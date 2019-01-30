import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class TeamComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="team-container">
                <div className="row">
                    <div className="col-4 p-0 full-height-container bg-light">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"><small>DETAILS</small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><small>REVIEW</small></a>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll-cntr scollable">

                            <div className="px-5 py-4 border-bottom border-med-light">
                                <button className="btn btn-secondary"><small>ADD NEW</small></button>
                            </div>

                            <div className="card team-card bg-transparent border-bottom border-med-light px-5 py-4">
                                <div className="my-2">
                                    <div className="d-flex align-items-center header-cntr mb-2">
                                        <div className="rounded-circle user-info float-left bg-secondary m-0 mr-3 mb-2">
                                            <img src="users/rick.jpg" />
                                        </div>
                                        <div className="desc">
                                            <h5 className="font-weight-bold text-muted mb-0">Anil D souza</h5>
                                            <h6 className="font-weight-bold my-1">+91 7353420123</h6>
                                            <h6 className="text-muted">7.5 yrs</h6>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-extra-muted">All Stakeholder Interview Questions</p>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">UX DESIGN</span>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">ANGULAR</span>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">REACT</span>
                                </div>
                            </div>

                            <div className="card team-card border-bottom border-med-light px-5 py-4">
                                <div className="my-2">
                                    <div className="d-flex align-items-center header-cntr mb-2">
                                        <div className="rounded-circle user-info float-left bg-secondary m-0 mr-3 mb-2">
                                            <img src="users/rick.jpg" />
                                        </div>
                                        <div className="desc">
                                            <h5 className="font-weight-bold text-muted mb-0">Anil D souza</h5>
                                            <h6 className="font-weight-bold my-1">+91 7353420123</h6>
                                            <h6 className="text-muted">7.5 yrs</h6>
                                        </div>
                                    </div>
                                    <p className="mb-2 text-extra-muted">All Stakeholder Interview Questions</p>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">UX DESIGN</span>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">HTML</span>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 full-height-container p-0">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"><small>DETAILS</small></a>
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

const connectedHomePage = connect(mapStateToProps)(TeamComponent);
export { connectedHomePage as TeamComponent };