import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { responseSuccess, requestFailure } from './actions';

export function* request({ payload }) {
  try {
    const { page } = payload;

    const response = yield call(api.get, `enrollments?page=${page}`);

    yield put(responseSuccess(response.data));
  } catch (err) {
    toast.error('Failure to fetch enrollments');
    yield put(requestFailure());
  }
}

export function* register({ payload }) {
  try {
    const { enrollment } = payload.plan;

    yield call(api.post, 'enrollments', enrollment);

    const response = yield call(api.get, 'enrollments');

    yield put(responseSuccess(response.data));
    toast.success('Enrollment resgitered');
  } catch (err) {
    toast.error('Failure to register enrollment');
    yield put(requestFailure());
  }
}

export function* update({ payload }) {
  try {
    const { id, enrollment } = payload;

    yield call(api.put, `enrollments/${id}`, enrollment);

    const response = yield call(api.get, 'enrollments');

    yield put(responseSuccess(response.data));
    toast.success('Enrollment updated');
  } catch (err) {
    toast.error('Failure to update a enrollment');
    yield put(requestFailure());
  }
}

export function* deleteEnrollment({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `enrollments/${id}`);

    const response = yield call(api.get, 'enrollments');

    yield put(responseSuccess(response.data));
    toast.warn('Enrollment deleted');
  } catch (err) {
    toast.error('Failure to register a enrollment');
    yield put(requestFailure());
  }
}

export default all([
  takeLatest('@enrollment/GET_REQUEST', request),
  takeLatest('@enrollment/REGISTER_REQUEST', register),
  takeLatest('@enrollment/UPDATE_REQUEST', update),
  takeLatest('@enrollment/DELETE_REQUEST', deleteEnrollment),
]);
