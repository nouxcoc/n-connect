import * as types from '../actions/actionTypes';
// import initialState from './initialState';

export default function projectsReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.projects;

    case types.CREATE_PROJECT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.project)
      ];

    case types.UPDATE_PROJECT_SUCCESS:
      return [
        ...state.filter(project => project._id !== action.project._id),
        Object.assign({}, action.project)
      ];

    case types.DELETE_PROJECT_SUCCESS:
      return [
        ...state.filter(project => project._id !== action.project._id)
      ];

    default:
      return state;
  }
}
