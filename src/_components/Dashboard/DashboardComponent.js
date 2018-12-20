import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class DashBoardComponent extends React.Component {
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
                    <div className="col-3 full-height-container bg-light"></div>
                    <div className="col-4 full-height-container"></div>
                    <div className="col-5 full-height-container">
                        <h1 className="display-4">DashBoard</h1>
                        <p>You're logged in with React!!</p>
                        <h2>WELCOME {user.user.name}</h2>
                    </div>
                </div>
            </div>
            // <div className="col-md-6">
            //     <h1 className="display-4">DashBoard</h1>
            //     <p>You're logged in with React!!</p>
            //     <h2>WELCOME {user.user.name}</h2>
            //     <h3>All registered users:</h3>
            //     {/* {users.loading && <em>Loading users...</em>} */}
            //     {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            //     {/* {users.items &&
            //         <ul>
            //             {users.items.map((user, index) =>
            //                 <li key={user.id}>
            //                     {user.firstName + ' ' + user.lastName}
            //                     {
            //                         user.deleting ? <em> - Deleting...</em>
            //                             : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
            //                                 : <span> - <a href="/" onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
            //                     }
            //                 </li>
            //             )}
            //         </ul>
            //     } */}
            //     <p>
            //         <Link to="/login">Logout</Link>
            //     </p>
            // </div>
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

const connectedHomePage = connect(mapStateToProps)(DashBoardComponent);
export { connectedHomePage as DashBoardComponent };