import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../../../actions/todoActions';
import ToDoForm from './ToDoForm';
import { categoriesFormattedForDropdown } from '../../../selectors/selectors';
import toastr from 'toastr';
import socketIOClient from "socket.io-client";
//const socket = socketIOClient('http://localhost:3000');
// import axios from 'axios';

class ManageToDo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      todo: Object.assign({}, props.todo),
      errors: {},
      saving: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    let prev = this.getToDoById(this.props.todolist, this.props.selectedId),
      nxt = this.getToDoById(nextProps.todolist, nextProps.selectedId);
    if (nxt && prev !== nxt) {
      this.setState({ todo: Object.assign({}, nxt), errors: {} });
    }
    else {
      let q = { title: '', type: 'work' }
      this.setState({ todo: Object.assign({}, q), errors: {} });
    }
  }

  getToDoById(todolist, id) {
    const todo = todolist.filter(todo => todo._id === id);
    if (todo.length) return todo[0]; //since filter returns an array, have to grab the first.
    return null;
  }

  updateToDoState = (event) => {
    const field = event.target.name;
    let todo = Object.assign({}, this.state.todo);
    todo[field] = event.target.value;
    return this.setState({ todo: todo });
  }

  todoFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.todo.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  saveToDo = (event) => {
    event.preventDefault();

    if (!this.todoFormIsValid()) {
      return;
    }
    let model = this.state.todo;
    this.setState({ saving: true });
    if (this.state.todo._id) {
      model.updatedOn = new Date();
      model.userId = this.props.user._id;
      this.props.actions.updateToDo(model)
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
      this.props.actions.saveToDo(model)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({ saving: false });
        });
    }

  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('ToDo saved');
    this.props.onHideEdit();
  }

  render() {
    return (
      <div className="todo-edit-cntr">
        <div className="top-header border-bottom border-med-light px-4 pt-2">
          <div className="row mt-2">
            <div className="col-12 px-4">
              <h6 className="display-5 text-extra-muted font-weight-bold mt-2"> &nbsp;+ ADD NEW TODO</h6>
            </div>
          </div>
        </div>
        <div className="form-cntr p-4">
          <ToDoForm
            onChange={this.updateToDoState}
            onSave={this.saveToDo}
            todo={this.state.todo}
            errors={this.state.errors}
            saving={this.state.saving}
            onHideEdit={this.props.onHideEdit}
          />
        </div>
      </div>
    );
  }
}

ManageToDo.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageToDo.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { user } = state.authentication.user;
  let todo = { userId: '', title: '', type: 'personal' };
  return {
    user: user,
    todo: todo,
    todolist: state.todolist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(ManageToDo);
export { connectedApp as ManageToDo };
