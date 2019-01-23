import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../../_helpers';
import { userActions } from '../../_actions';
import { ToDoComponent } from './ToDo/ToDoComponent';
import { NotesComponent } from './Notes/NotesComponent';
import { loadToDoList } from '../../actions/todoActions';
import { loadNotes } from '../../actions/notesActions';

class DashBoardComponent extends React.Component {
    componentDidMount() {
        const { user } = this.props.user;
        store.dispatch(loadToDoList(user._id));
        store.dispatch(loadNotes(user._id));
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
                    <div className="col-12 full-height-container scroll-bar bg-light p-0">
                        <div className="scollable px-5 py-4">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className=" text-muted custom-font font-weight-light">Hello <span className="font-weight-normal">Anil</span></h1>
                                </div>
                                <div className="col-4">
                                    <div className="card rounded bg-warning text-white px-5 py-4">
                                        <h2 className="mb-0 custom-font font-weight-light display-4">24</h2>
                                        <p className="mb-0"><small>Active Projects</small></p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card rounded bg-primary text-white px-5 py-4">
                                        <h2 className="mb-0 custom-font font-weight-light display-4">24</h2>
                                        <p className="mb-0"><small>Completed Projects</small></p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="card bg-secondary text-white rounded px-5 py-4">
                                        <h2 className="mb-0 custom-font font-weight-light display-4">24</h2>
                                        <p className="mb-0"><small>All Interview Questions</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <ToDoComponent />
                                </div>
                                <div className="col-6">
                                    <NotesComponent />
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

const connectedHomePage = connect(mapStateToProps)(DashBoardComponent);
export { connectedHomePage as DashBoardComponent };