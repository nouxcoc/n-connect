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
                    <div className="col-12 text-center p-0 full-height-container bg-light">
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
                        <div className="scroll-cntr scollable p-5">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card p-4">
                                        <div className="user-info-cntr py-1">
                                            <h5 className="text-secondary font-weight-bold">7.5 yrs</h5>
                                            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
                                                <img src="users/rick.jpg" />
                                            </div>
                                            <h6 className="font-weight-bold text-muted">Anil Dsouza</h6>
                                            <h6>+91 7353420123</h6>
                                            <p><small className="text-extra-muted font-weight-bold">UI / UX LEAD</small></p>
                                            {/* <div className="pb-3 border-bottom border-light">
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
                                        </div> */}
                                            <div className="pt-4 border-top border-light">
                                                <button className="btn btn-outline-primary"><small>VIEW</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card p-4">
                                        <div className="user-info-cntr py-1">
                                            <h5 className="text-secondary font-weight-bold">7.5 yrs</h5>
                                            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
                                                <img src="users/rick.jpg" />
                                            </div>
                                            <h6 className="font-weight-bold text-muted">Anil Dsouza</h6>
                                            <h6>+91 7353420123</h6>
                                            <p><small className="text-extra-muted font-weight-bold">UI / UX LEAD</small></p>
                                            {/* <div className="pb-3 border-bottom border-light">
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
                                        </div> */}
                                            <div className="pt-4 border-top border-light">
                                                <button className="btn btn-outline-primary"><small>VIEW</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card p-4">
                                        <div className="user-info-cntr py-1">
                                            <h5 className="text-secondary font-weight-bold">7.5 yrs</h5>
                                            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
                                                <img src="users/daryl.jpg" />
                                            </div>
                                            <h6 className="font-weight-bold text-muted">Anil Dsouza</h6>
                                            <h6>+91 7353420123</h6>
                                            <p><small className="text-extra-muted font-weight-bold">UI / UX LEAD</small></p>
                                            {/* <div className="pb-3 border-bottom border-light">
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
                                        </div> */}
                                            <div className="pt-4 border-top border-light">
                                                <button className="btn btn-outline-primary"><small>VIEW</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card p-4">
                                        <div className="user-info-cntr py-1">
                                            <h5 className="text-secondary font-weight-bold">7.5 yrs</h5>
                                            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
                                                <img src="users/rick.jpg" />
                                            </div>
                                            <h6 className="font-weight-bold text-muted">Anil Dsouza</h6>
                                            <h6>+91 7353420123</h6>
                                            <p><small className="text-extra-muted font-weight-bold">UI / UX LEAD</small></p>
                                            {/* <div className="pb-3 border-bottom border-light">
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
                                        </div> */}
                                            <div className="pt-4 border-top border-light">
                                                <button className="btn btn-outline-primary"><small>VIEW</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card p-4">
                                        <div className="user-info-cntr py-1">
                                            <h5 className="text-secondary font-weight-bold">7.5 yrs</h5>
                                            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
                                                <img src="users/rick.jpg" />
                                            </div>
                                            <h6 className="font-weight-bold text-muted">Anil Dsouza</h6>
                                            <h6>+91 7353420123</h6>
                                            <p><small className="text-extra-muted font-weight-bold">UI / UX LEAD</small></p>
                                            {/* <div className="pb-3 border-bottom border-light">
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
                                        </div> */}
                                            <div className="pt-4 border-top border-light">
                                                <button className="btn btn-outline-primary"><small>VIEW</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card p-4">
                                        <div className="user-info-cntr py-1">
                                            <h5 className="text-secondary font-weight-bold">7.5 yrs</h5>
                                            <div className="rounded-circle user-info bg-secondary my-2 d-flex justify-content-center align-items-center text-white align-items-center">
                                                <img src="users/daryl.jpg" />
                                            </div>
                                            <h6 className="font-weight-bold text-muted">Anil Dsouza</h6>
                                            <h6>+91 7353420123</h6>
                                            <p><small className="text-extra-muted font-weight-bold">UI / UX LEAD</small></p>
                                            {/* <div className="pb-3 border-bottom border-light">
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">General</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">COMMON</span>
                                            <span className="badge badge-pill bg-light d-inline-block px-3 py-2 font-weight-normal text-muted m-1">BRANDING</span>
                                        </div> */}
                                            <div className="pt-4 border-top border-light">
                                                <button className="btn btn-outline-primary"><small>VIEW</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-4 full-height-container"></div>
                    <div className="col-5 full-height-container">
                        <h1 className="display-4">Team</h1>
                        <p>You're logged in with React!!</p>
                        <h2>WELCOME {user.user.name}</h2>
                    </div> */}
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