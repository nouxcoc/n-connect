import * as types from './actionTypes';
import { ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';
import * as config from '../_helpers/config';

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
    return axios.get(`${config.URL}messages`)
      .then(res => {
        dispatch(loadMessageSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function sendMessage(message) {
  return function (dispatch, getState) {
    return axios.post(`${config.URL}messages`, message)
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
    return axios.put(`${config.URL}messages/${message._id}`, message)
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
    return axios.delete(`${config.URL}messages/${messageId}`)
      .then(res => {
        dispatch(deleteMessageSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

