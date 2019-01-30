import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from "lodash";
import { store } from '../../_helpers';
import { userActions } from '../../_actions';
import { loadProjects } from '../../actions/projectsActions';
import NoResults from '../_common/NoResults';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

class ProjectsComponent extends React.Component {
    componentDidMount() {
        const { user } = this.props.user;
        store.dispatch(loadProjects(user._id));
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, projects } = this.props;
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

                            {projects.length === 0 ? <NoResults /> :
                                projects.map((project, index) =>
                                    <div key={project._id} className={'project-card card border-bottom border-med-light px-5 py-4 ' + (index == 1 ? 'bg-primary' : 'bg-transparent')}>
                                        <div className="floating-cntr">
                                            <small>
                                                <small className={'d-inline-flex align-items-center ' + (project.active ? 'text-warning' : 'text-extra-muted')}>
                                                    <i className="material-icons mr-1 md-18">
                                                        {project.active ? 'access_time' : 'done_all'}
                                                    </i>{project.active ? 'in progress' : 'completed'}</small>
                                            </small>
                                        </div>
                                        <h4 className="font-weight-bold text-extra-muted">{project.name}</h4>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="rounded-circle user-info float-left bg-secondary m-0 mr-2">
                                                <img src="users/rick.jpg" />
                                            </div>
                                            <div className="desc">
                                                <h6 className="text-muted mb-0 font-weight-bold">{project.uxDesigner}</h6>
                                                {/* <small className="text-extra-muted ls-3">UX DESIGNER</small> */}
                                            </div>
                                        </div>
                                        <p className="mb-2 text-extra-muted">All Stakeholder Interview Questions</p>
                                        <div className="">
                                            <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">UX</span>
                                            <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">HTML</span>
                                            <span className="badge badge-pill badge-border bg-white d-inline-block px-3 py-2 mb-1 font-weight-normal text-muted">CSS</span>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                    <div className="col-8 full-height-container p-0">
                        <div className="top-header tabs border-bottom px-5">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#"><small>DETAILS</small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><small>REVIEWS POINTS</small></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><small>QUESTIONAIRE</small></a>
                                </li>
                            </ul>
                        </div>
                        <div className="scroll-cntr scollable">
                            <div className="p-5">
                                {/* <h1 className="display-4">Projects</h1>
                                <h2>{user.user.name}</h2> */}
                                <div className="row">
                                    <div className="col-md-6 d-flex">
                                        <div className="card rounded card-spacing">
                                            <div className="floating-cntr">
                                                <small className="d-inline-flex align-items-center text-warning">
                                                    <i className="material-icons mr-1 md-18">
                                                        access_time
                                                        </i>In progress
                                                </small>
                                            </div>
                                            <h6 className="font-weight-bold text-extra-muted">PROJECT</h6>
                                            <div className="project-cntr">
                                                <h4 className="font-weight-bold text-secondary"><strong>FITCH</strong></h4>
                                                <p className="text-muted pr-5 mb-0">Design Credit Rating Application with great User Experience </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex">

                                        <div className="card rounded card-spacing">
                                            <h6 className="font-weight-bold text-extra-muted">PROJECT CODE</h6>
                                            <h4 className="font-weight-bold text-secondary"><strong>FIT34CH</strong></h4>
                                            <h6 className="font-weight-bold text-extra-muted mt-3 mb-0">PROJECT MANAGER</h6>
                                            <h4 className="font-weight-bold text-secondary"><strong>Abraham V A</strong></h4>
                                        </div>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 d-flex mt-4">
                                        <div className="card rounded card-spacing">
                                            <h6 className="font-weight-bold text-extra-muted">UX DESIGNERS</h6>
                                            <div className="project-cntr">
                                                <Grid container alignItems="center" className="avatar-grid">
                                                    <Tooltip title="Remy Sharp" placement="top">
                                                        <Avatar alt="Remy Sharp" src="users/carol.jpg" className="avatar big-avatar" />
                                                    </Tooltip>
                                                    <Tooltip title="Anil D" placement="top">
                                                        <Avatar alt="Remy Sharp" src="users/ad.jpg" className="avatar big-avatar" />
                                                    </Tooltip>
                                                </Grid>
                                                <div className="mt-3">
                                                    <span className="badge badge-pill badge-border text-muted">UX</span>
                                                    <span className="badge badge-pill badge-border text-muted">REACT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex mt-4">


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
    const projects = _.sortBy(state.projects, 'createdOn');
    return {
        user,
        users,
        projects
    };
}

const connectedHomePage = connect(mapStateToProps)(ProjectsComponent);
export { connectedHomePage as ProjectsComponent };