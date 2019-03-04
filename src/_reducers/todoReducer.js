import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_TODOLIST_SUCCESS:
      return action.todolist;

    case types.CREATE_TODO_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.todo)
      ];

    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(todo => todo._id !== action.todo._id),
        Object.assign({}, action.todo)
      ];

    case types.DELETE_TODO_SUCCESS:
      return [
        ...state.filter(todo => todo._id !== action.todo._id)
      ];

    default:
      return state;
  }
}
