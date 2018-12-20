import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messageReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return action.messages;

    case types.CREATE_MESSAGE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.message)
      ];

    case types.UPDATE_MESSAGE_SUCCESS:
      return [
        ...state.filter(message => message._id !== action.message._id),
        Object.assign({}, action.message)
      ];

    case types.DELETE_MESSAGE_SUCCESS:
      return [
        ...state.filter(message => message._id !== action.message._id)
      ];

    default:
      return state;
  }
}
