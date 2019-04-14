import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
// import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import { userActions } from '../../_actions';

class TeamComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        // const { user, users } = this.props;
        return (
            <div className="team-container">
                <div className="row">
                    <div className="col-4 p-0 full-height-container bg-light">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <span className="nav-link active" href="#"><small>DETAILS</small></span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link" href="#"><small>REVIEW</small></span>
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
                                            <img alt="Anil Dsouza" src="users/rick.jpg" />
                                        </div>
                                        <div className="desc">
                                            <h5 className="font-weight-bold text-muted mb-0">Anil D souza</h5>
                                            <h6 className="font-weight-bold my-1">+91 7353420123</h6>
                                            <h6 className="text-muted">7.5 yrs</h6>
                                        </div>
                                    </div>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">UX DESIGN</span>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">ANGULAR</span>
                                    <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">REACT</span>
                                </div>
                            </div>

                            <div className="card team-card bg-primary border-bottom border-med-light px-5 py-4">
                                <div className="my-2">
                                    <div className="d-flex align-items-center header-cntr mb-2">
                                        <div className="rounded-circle user-info float-left bg-secondary m-0 mr-3 mb-2">
                                            <img alt="Anil" src="users/rick.jpg" />
                                        </div>
                                        <div className="desc text-white">
                                            <h5 className="font-weight-bold mb-0">Anil D souza</h5>
                                            <h6 className="font-weight-bold my-1">+91 7353420123</h6>
                                            <h6 className="opac-5">7.5 yrs</h6>
                                        </div>
                                    </div>
                                    <span className="badge badge-pill badge-border text-white">UX DESIGN</span>
                                    <span className="badge badge-pill badge-border text-white">HTML</span>
                                    <span className="badge badge-pill badge-border text-white">CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 full-height-container p-0">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <span className="nav-link active" href="#"><small>DETAILS</small></span>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll-cntr scollable">
                            <div className="p-5">
                                <div className="row">
                                    <div className="col-md-6 d-flex">
                                        <div className="card rounded card-spacing">
                                            <div className="floating-cntr">
                                                <Tooltip title="Edit" placement="top">
                                                    <IconButton aria-label="View">
                                                        <Icon>edit</Icon>
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <h6 className="font-weight-bold text-extra-muted mb-2">INFO</h6>
                                            <div className="d-flex align-items-center header-cntr my-2">
                                                <div className="rounded-circle user-info float-left bg-secondary m-0 mr-3 mb-2">
                                                    <img alt="Anil" src="users/rick.jpg" />
                                                </div>
                                                <div className="desc">
                                                    <h5 className="font-weight-bold text-muted mb-0">Anil D souza</h5>
                                                    <h6 className="font-weight-bold my-1">+91 7353420123</h6>
                                                    <h6 className="text-muted">7.5 yrs</h6>
                                                </div>
                                            </div>
                                            <p className="text-muted pr-5 mb-0">Design Credit Rating Application with great User Experience </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex">
                                        <div className="card rounded card-spacing">
                                            <div className="floating-cntr">
                                                <Tooltip title="Edit" placement="top">
                                                    <IconButton aria-label="View">
                                                        <Icon>edit</Icon>
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <h6 className="font-weight-bold text-extra-muted">SKILLS</h6>
                                            <div className="mt-3">
                                                <span className="badge badge-pill badge-border text-muted">IA</span>
                                                <span className="badge badge-pill badge-border text-muted">WIREFRAMES</span>
                                                <span className="badge badge-pill badge-border text-muted">PHOTOSHOP</span>
                                                <span className="badge badge-pill badge-border text-muted">SKETCH</span>
                                                <span className="badge badge-pill badge-border text-muted">ADOBE XD</span>
                                                <span className="badge badge-pill badge-border text-muted">HTML</span>
                                                <span className="badge badge-pill badge-border text-muted">CSS</span>
                                                <span className="badge badge-pill badge-border text-muted">JAVASCRIPT</span>
                                                <span className="badge badge-pill badge-border text-muted">ANGULAR</span>
                                                <span className="badge badge-pill badge-border text-muted">REACT</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6 d-flex mt-4">
                                        <div className="card rounded card-spacing">
                                            <h6 className="font-weight-bold text-extra-muted">CURRENT PROJECT</h6>
                                            <div className="project-cntr">
                                                <div className="floating-cntr">
                                                    <Tooltip title="View Project" placement="top">
                                                        <IconButton aria-label="View">
                                                            <Icon>arrow_forward</Icon>
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                                <h4 className="font-weight-bold text-secondary"><strong>FITCH</strong></h4>
                                                <p className="text-muted pr-5">Design Credit Rating Application with great User Experience </p>
                                                <div className="mt-3">
                                                    <span className="badge badge-pill badge-border text-muted">UX</span>
                                                    <span className="badge badge-pill badge-border text-muted">REACT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex mt-4">
                                        <div className="card rounded card-spacing">
                                            <div className="floating-cntr">
                                                <Tooltip title="Edit" placement="top">
                                                    <IconButton aria-label="View">
                                                        <Icon>edit</Icon>
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <h6 className="font-weight-bold text-extra-muted mb-4">SOCIAL CONNECT</h6>
                                            <div className="social-icons-cntr">
                                                <Fab size="medium" aria-label="Add">
                                                    <Icon>alarm</Icon>
                                                </Fab>
                                                <Fab size="medium" aria-label="Add">
                                                    <Icon>aspect_ratio</Icon>
                                                </Fab>
                                                <Fab size="medium" aria-label="Add">
                                                    <Icon>favorite_border</Icon>
                                                </Fab>
                                                <Fab size="medium" aria-label="Add">
                                                    <Icon>language</Icon>
                                                </Fab>
                                                <Fab size="medium" aria-label="Add">
                                                    <Icon>airplay</Icon>
                                                </Fab>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card rounded card-spacing mt-4">
                                            <h6 className="font-weight-bold text-extra-muted">RECENT PROJECTS</h6>
                                            <div className="project-cntr border-bottom border-light py-3">
                                                <div className="floating-cntr">
                                                    <IconButton aria-label="Copy">
                                                        <Icon>arrow_forward</Icon>
                                                    </IconButton>
                                                </div>
                                                <h6 className="font-weight-bold text-secondary"><strong>VIEW POINT</strong></h6>
                                                <Grid container alignItems="center" className="avatar-grid">
                                                    <span className="badge mb-0 badge-pill badge-border text-muted">UX</span>
                                                    <span className="badge mb-0 badge-pill badge-border text-muted">REACT</span>
                                                </Grid>
                                            </div>

                                            <div className="project-cntr border-bottom border-light py-3">
                                                <div className="floating-cntr">
                                                    <IconButton aria-label="Copy">
                                                        <Icon>arrow_forward</Icon>
                                                    </IconButton>
                                                </div>
                                                <h6 className="font-weight-bold text-secondary"><strong>17G5</strong></h6>
                                                <Grid container alignItems="center" className="avatar-grid">
                                                    <span className="badge mb-0 badge-pill badge-border text-muted">UX</span>
                                                    <span className="badge mb-0 badge-pill badge-border text-muted">REACT</span>
                                                </Grid>
                                            </div>

                                            <div className="project-cntr py-3">
                                                <div className="floating-cntr">
                                                    <IconButton aria-label="Copy">
                                                        <Icon>arrow_forward</Icon>
                                                    </IconButton>
                                                </div>
                                                <h6 className="font-weight-bold text-secondary"><strong>TICKET NETWORK</strong></h6>
                                                <Grid container alignItems="center" className="avatar-grid">
                                                    <span className="badge mb-0 badge-pill badge-border text-muted">UX</span>
                                                    <span className="badge mb-0 badge-pill badge-border text-muted">REACT</span>
                                                </Grid>
                                            </div>

                                        </div>
                                    </div>
                                </div>

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