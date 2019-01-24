import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

const baseurl = "https://n-connect-api.herokuapp.com/";

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
    return axios.get(`${baseurl}todolist/${userId}`)
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
    return axios.post(`${baseurl}todolist`, todo)
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
    return axios.put(`${baseurl}todolist/${todo._id}`, todo)
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
    return axios.delete(`${baseurl}todolist/${todoId}`)
      .then(res => {
        dispatch(deleteToDoSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

