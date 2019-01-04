import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import categories from './categoryReducer';
import questions from './questionReducer';
import messages from './messageReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  categories,
  questions,
  messages,
  ajaxCallsInProgress
});

export default rootReducer;
