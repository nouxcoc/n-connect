import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import categories from './categoryReducer';
import questions from './questionReducer';
import todolist from './todoReducer';
import notes from './notesReducer';
import projects from './projectsReducer';
import messages from './messageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const appReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  categories,
  questions,
  messages,
  todolist,
  notes,
  projects,
  ajaxCallsInProgress
});

const rootReducer = (state, action) => {
  if (action.type === 'USERS_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action);
}

export default rootReducer;
