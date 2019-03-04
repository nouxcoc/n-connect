import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return action.questions;

    case types.CREATE_QUESTION_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.question)
      ];

    case types.UPDATE_QUESTION_SUCCESS:
      return [
        ...state.filter(question => question._id !== action.question._id),
        Object.assign({}, action.question)
      ];

    case types.DELETE_QUESTION_SUCCESS:
      return [
        ...state.filter(question => question._id !== action.question._id)
      ];

    default:
      return state;
  }
}
