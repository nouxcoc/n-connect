import * as types from './actionTypes';
// import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

const baseurl = "http://localhost:3000/";

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(course) {
  return { type: types.DELETE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get(`${baseurl}courses`)
      .then(res => {
        dispatch(loadCoursesSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.post(`${baseurl}courses`, course)
      .then(res => {
        console.log(res.data);
        dispatch(createCourseSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.put(`${baseurl}courses/${course._id}`, course)
      .then(res => {
        dispatch(updateCourseSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteCourse(courseId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.delete(`${baseurl}courses/${courseId}`)
      .then(res => {
        dispatch(deleteCourseSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

