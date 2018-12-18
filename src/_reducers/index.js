import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import authors from './authorReducer';
import questions from './questionReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  authors,
  questions,
  ajaxCallsInProgress
});

export default rootReducer;
