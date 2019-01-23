import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../../../actions/notesActions';
import NoteForm from './NoteForm';
import toastr from 'toastr';

class ManageNote extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      note: Object.assign({}, props.note),
      errors: {},
      saving: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    let prev = this.getNoteById(this.props.notes, this.props.selectedId),
      nxt = this.getNoteById(nextProps.notes, nextProps.selectedId);
    if (nxt && prev !== nxt) {
      this.setState({ note: Object.assign({}, nxt), errors: {} });
    }
    else {
      let q = { title: '', type: 'text' }
      this.setState({ note: Object.assign({}, q), errors: {} });
    }
  }

  getNoteById(notes, id) {
    const note = notes.filter(note => note._id === id);
    if (note.length) return note[0]; //since filter returns an array, have to grab the first.
    return null;
  }

  updateNoteState = (event) => {
    const field = event.target.name;
    let note = Object.assign({}, this.state.note);
    note[field] = event.target.value;
    return this.setState({ note: note });
  }

  noteFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.note.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  saveNote = (event) => {
    event.preventDefault();

    if (!this.noteFormIsValid()) {
      return;
    }
    let model = this.state.note;
    this.setState({ saving: true });
    if (this.state.note._id) {
      model.updatedOn = new Date();
      model.userId = this.props.user._id;
      this.props.actions.updateNote(model)
        .then(() => {
          this.redirect();
        })
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }
    else {
      model.createdOn = new Date();
      model.userId = this.props.user._id;
      model.active = true;
      this.props.actions.saveNote(model)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }

  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Note saved');
    this.props.onHideEdit();
  }

  render() {
    return (
      <div className="note-edit-cntr">
        <div className="top-header border-bottom border-med-light px-4 pt-2">
          <div className="row mt-2">
            <div className="col-12 px-4">
              <h6 className="display-5 text-extra-muted font-weight-bold mt-2"> &nbsp;+ ADD NEW NOTE</h6>
            </div>
          </div>
        </div>
        <div className="form-cntr p-4">
          <NoteForm
            onChange={this.updateNoteState}
            onSave={this.saveNote}
            note={this.state.note}
            errors={this.state.errors}
            saving={this.state.saving}
            onHideEdit={this.props.onHideEdit}
          />
        </div>
      </div>
    );
  }
}

ManageNote.propTypes = {
  note: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageNote.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { user } = state.authentication.user;
  let note = { userId: '', title: '', type: 'personal' };
  return {
    user: user,
    note: note,
    notes: state.notes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(noteActions, dispatch)
  };
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ManageNote);
export { connectedApp as ManageNote };
