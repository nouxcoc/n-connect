import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Login.scss';
import { userActions } from '../_actions';
import { history } from '../_helpers';
import LoginForm from './LoginForm';
import Avatar from '@material-ui/core/Avatar';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.actions.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            errors: false,
            validuser: 'team'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value, submitted: false });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            // dispatch(userActions.login(username, password));
            this.props.actions.login(username, password)
                .then((res) => {
                    history.push('/');
                })
                .catch(error => {
                    this.setState({ submitted: false, errors: true });
                });
        }
    }

    handleBlur = (e) => {
        if (e.target.value) {
            this.props.actions.checkuser(e.target.value)
                .then(res => {
                    this.setState({ validuser: res ? res : 'team' });
                });
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted, errors, validuser } = this.state;
        return (
            <div className="login-bg container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-8 d-flex justify-content-center align-items-center full-height-container intro-section">
                        <div className="row mx-4 py-5 justify-content-center align-items-center">
                            <div className="col-12 text-center text-primary">
                                <p className="mb-0 ls-8">WELCOME TO</p>
                                <p className="display-2 mb-5 font-weight-bold">
                                    <strong>U
                                        <span className="text-dark">X</span>D
                                        <span className="text-secondary">.</span>
                                    </strong>
                                </p>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="py-4 text-center">
                                    <h2 className="mb-0 custom-font font-weight-bold text-warning display-4">12</h2>
                                    <small className="mb-0 text-muted ls-4"><small>TEAM</small></small>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="py-4 text-center">
                                    <h2 className="mb-0 custom-font font-weight-bold text-primary display-4">08</h2>
                                    <small className="mb-0 text-muted ls-4"><small>RUNNING PROJECTS</small></small>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="py-4 text-center">
                                    <h2 className="mb-0 custom-font font-weight-bold text-secondary display-4">04</h2>
                                    <small className="mb-0 text-muted ls-4"><small>UPCOMING PROJECTS</small></small>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 bg-white full-height-container px-4">
                        <div className="row full-height-container justify-content-center align-items-center">
                            <div className="col-md-12 col-xl-8 text-center text-primary pb-5">
                                <Avatar alt="User" src={'/users/' + validuser + '.' + (validuser == 'team' ? 'svg' : 'jpg')} className="avatar d-inline-flex big-avatar" />

                                <LoginForm
                                    submitted={submitted}
                                    username={username}
                                    password={password}
                                    onChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    handleBlur={this.handleBlur}
                                    errors={errors}
                                />
                                {/* <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" placeholder="Username" autoComplete="off" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                        {submitted && !username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" placeholder="Password" autoComplete="off" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                        {submitted && !password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg font-weight-light btn-primary"><small>LOGIN</small></button>
                                        {loggingIn &&
                                            <img alt="" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                        <Link to="/register" className="btn btn-link">Register</Link>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 