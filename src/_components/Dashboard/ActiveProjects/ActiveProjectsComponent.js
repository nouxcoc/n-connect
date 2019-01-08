import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ActiveProjectsComponent extends React.Component {
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        //return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="card rounded px-5 py-4">
                                        <h2 className="mb-0 custom-font font-weight-light display-4">24</h2>
                                        <p className="mb-0"><small>Active Projects</small></p>
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

const connectedHomePage = connect(mapStateToProps)(ActiveProjectsComponent);
export { connectedHomePage as ActiveProjectsComponent };