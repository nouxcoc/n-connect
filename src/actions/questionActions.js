import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

const baseurl = "http://localhost:3000/";

export function loadQuestionsSuccess(questions) {
  return { type: types.LOAD_QUESTIONS_SUCCESS, questions };
}

export function createQuestionSuccess(question) {
  return { type: types.CREATE_QUESTION_SUCCESS, question };
}

export function updateQuestionSuccess(question) {
  return { type: types.UPDATE_QUESTION_SUCCESS, question };
}

export function deleteQuestionSuccess(question) {
  return { type: types.DELETE_QUESTION_SUCCESS, question };
}

export function loadQuestions() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get(`${baseurl}questions`)
      .then(res => {
        dispatch(loadQuestionsSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function saveQuestion(question) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.post(`${baseurl}questions`, question)
      .then(res => {
        dispatch(createQuestionSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateQuestion(question) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.put(`${baseurl}questions/${question._id}`, question)
      .then(res => {
        dispatch(updateQuestionSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteQuestion(questionId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.delete(`${baseurl}questions/${questionId}`)
      .then(res => {
        dispatch(deleteQuestionSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

