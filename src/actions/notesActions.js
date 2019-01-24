import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

const baseurl = "https://n-connect-api.herokuapp.com/";

export function loadNotesSuccess(todolist) {
  return { type: types.LOAD_NOTES_SUCCESS, todolist };
}

export function createNoteSuccess(todo) {
  return { type: types.CREATE_NOTE_SUCCESS, todo };
}

export function updateNoteSuccess(todo) {
  return { type: types.UPDATE_NOTE_SUCCESS, todo };
}

export function deleteNoteSuccess(todo) {
  return { type: types.DELETE_NOTE_SUCCESS, todo };
}

export function loadNotes(userId) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get(`${baseurl}notes/${userId}`)
      .then(res => {
        dispatch(loadNotesSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function saveNote(note) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.post(`${baseurl}notes`, note)
      .then(res => {
        dispatch(createNoteSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateNote(note) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.put(`${baseurl}notes/${note._id}`, note)
      .then(res => {
        dispatch(updateNoteSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteNote(noteId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.delete(`${baseurl}notes/${noteId}`)
      .then(res => {
        dispatch(deleteNoteSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

