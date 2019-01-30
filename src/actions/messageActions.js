import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

const baseurl = "http://localhost:3000/";

export function loadMessageSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

export function createMessageSuccess(message) {
  return { type: types.CREATE_MESSAGE_SUCCESS, message };
}

export function updateMessageSuccess(message) {
  return { type: types.UPDATE_MESSAGE_SUCCESS, message };
}

export function deleteMessageSuccess(message) {
  return { type: types.DELETE_MESSAGE_SUCCESS, message };
}

export function loadMessages() {
  return function (dispatch) {
    return axios.get(`${baseurl}messages`)
      .then(res => {
        dispatch(loadMessageSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function sendMessage(message) {
  return function (dispatch, getState) {
    return axios.post(`${baseurl}messages`, message)
      .then(res => {
        dispatch(createMessageSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateMessage(message) {
  return function (dispatch, getState) {
    return axios.put(`${baseurl}messages/${message._id}`, message)
      .then(res => {
        dispatch(updateMessageSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteMessage(messageId) {
  return function (dispatch, getState) {
    return axios.delete(`${baseurl}messages/${messageId}`)
      .then(res => {
        dispatch(deleteMessageSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

