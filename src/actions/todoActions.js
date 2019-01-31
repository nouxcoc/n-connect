import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';
import * as config from '../_helpers/config';

export function loadToDoListSuccess(todolist) {
  return { type: types.LOAD_TODOLIST_SUCCESS, todolist };
}

export function createToDoSuccess(todo) {
  return { type: types.CREATE_TODO_SUCCESS, todo };
}

export function updateToDoSuccess(todo) {
  return { type: types.UPDATE_TODO_SUCCESS, todo };
}

export function deleteToDoSuccess(todo) {
  return { type: types.DELETE_TODO_SUCCESS, todo };
}

export function loadToDoList(userId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get(`${config.URL}todolist/${userId}`)
      .then(res => {
        dispatch(loadToDoListSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function saveToDo(todo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.post(`${config.URL}todolist`, todo)
      .then(res => {
        dispatch(createToDoSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateToDo(todo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.put(`${config.URL}todolist/${todo._id}`, todo)
      .then(res => {
        dispatch(updateToDoSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteToDo(todoId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.delete(`${config.URL}todolist/${todoId}`)
      .then(res => {
        dispatch(deleteToDoSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

