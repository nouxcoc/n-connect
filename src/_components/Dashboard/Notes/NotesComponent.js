import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import Note from './Note';
import * as noteActions from '../../../actions/notesActions';
import { ManageNote } from './ManageNote';
import NoResults from '../../_common/NoResults';

class NotesComponent extends React.Component {

    state = {
        addEditActive: false,
        selectedToDelete: false,
        noteId: '',
        filterType: 'text'
    };

    componentDidMount() {
        this.filterNotes('text');
        //this.props.dispatch(userActions.getAll());
    }

    addEditNote = (noteId) => {
        this.setState({ addEditActive: true, selectedId: noteId ? noteId : null });
    }

    hideEditing = () => {
        this.setState({ addEditActive: false });
    }

    deleteNote = (noteId) => {
        this.props.actions.deleteNote(noteId)
            .then(() => { toastr.success('Deleted question successfully'); })
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
                this.setState({ selectedToDelete: false, selectedId: null });
            });
    }

    filterNotes = (type) => {
        this.setState({ filterType: type });
    }

    render() {
        let notes = this.props.notes.filter(note => note.type == this.state.filterType);

        return (
            <div className={"card rounded " + (this.state.addEditActive ? 'note-edit-active' : '')}>
                <h2 className="mb-0 custom-font font-weight-light display-5 px-5 pt-4">NOTES</h2>
                <div className="top-header tabs border-bottom px-5">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className={'nav-link cursor-pointer ' + (this.state.filterType == 'text' ? 'active' : '')} onClick={() => this.filterNotes('text')}><small>TEXT</small></a>
                        </li>
                        <li className="nav-item cursor-pointer">
                            <a className={'nav-link cursor-pointer ' + (this.state.filterType == 'url' ? 'active' : '')} onClick={() => this.filterNotes('url')}><small>URL</small></a>
                        </li>
                    </ul>
                    <div className="floating-cntr center">
                        <span className="rounded-btn bg-secondary" onClick={this.addEditNote}>
                            <i className="material-icons text-white mr-4">
                                add
                            </i>
                        </span>
                    </div>
                </div>
                <div className="scollable note-widget pt-3">

                    {notes.length === 0 ? <NoResults /> :
                        notes.map(note =>
                            <Note
                                note={note}
                                key={note._id}
                                onDelete={this.deleteNote}
                                onEdit={this.addEditNote}
                            />
                        )}
                    <ManageNote
                        selectedId={this.state.selectedId}
                        onHideEdit={this.hideEditing}
                    />
                </div>

            </div>
        );
    }
}

NotesComponent.propTypes = {
    notes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const notes = state.notes;
    // const stakeHolderQuestions = state.questions.filter(question => question.type == 'stakeholder');
    // const userQuestions = state.questions.filter(question => question.type == 'user');
    // const groupedQuestions = _.map(_.groupBy(state.questions, 'categoryId'));
    return {
        notes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(noteActions, dispatch)
    };
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(NotesComponent);
export { connectedHomePage as NotesComponent };