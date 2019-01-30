import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import axios from 'axios';

const baseurl = "http://localhost:3000/";

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function createProjectSuccess(project) {
  return { type: types.CREATE_PROJECT_SUCCESS, project };
}

export function updateProjectSuccess(project) {
  return { type: types.UPDATE_PROJECT_SUCCESS, project };
}

export function deleteProjectSuccess(project) {
  return { type: types.DELETE_PROJECT_SUCCESS, project };
}

export function loadProjects() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get(`${baseurl}projects`)
      .then(res => {
        dispatch(loadProjectsSuccess(res.data));
      }).catch((error) => {
        throw (error);
      });
  };
}

export function saveProject(project) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.post(`${baseurl}projects`, project)
      .then(res => {
        dispatch(createProjectSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function updateProject(project) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.put(`${baseurl}project/${project._id}`, project)
      .then(res => {
        dispatch(updateProjectSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

export function deleteProject(projectId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return axios.delete(`${baseurl}projects/${projectId}`)
      .then(res => {
        dispatch(deleteProjectSuccess(res.data));
      }).catch((error) => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}

