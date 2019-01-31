import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../_helpers';
import { userActions } from '../../_actions';
import { ToDoComponent } from './ToDo/ToDoComponent';
import { NotesComponent } from './Notes/NotesComponent';
import { loadToDoList } from '../../actions/todoActions';
import { loadNotes } from '../../actions/notesActions';
import { UserInfo } from './UserInfo';
import { HappeningAround } from './HappeningAround';
import { UsefulArticles } from './UsefulArticles';


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
        return (
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-4 full-height-container bg-dark scroll-bar p-0">
                        <UserInfo />
                    </div>
                    <div className="col-md-8 full-height-container p-0">
                        <div className="scollable scroll-bar card-spacing">
                            <HappeningAround />
                            <UsefulArticles />
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