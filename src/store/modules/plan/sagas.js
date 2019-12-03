import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { formatPrice } from '~/utils/format';

import { responseSuccess, requestFailure } from './actions';

function formatPlans(data) {
  return data.map(plan => ({
    ...plan,
    priceFormated: formatPrice(plan.price),
    totalFormated: formatPrice(plan.duration * plan.price),
  }));
}

export function* request({ payload }) {
  try {
    const { page } = payload;

    const response = yield call(api.get, `plans?page=${page}`);

    const data = formatPlans(response.data);

    yield put(responseSuccess(data));
  } catch (err) {
    toast.error('Failure to fetch plans');
    yield put(requestFailure());
  }
}

export function* register({ payload }) {
  try {
    const { title, duration, price } = payload.plan;

    yield call(api.post, 'plans', {
      title,
      duration: Number(duration),
      price: parseFloat(price),
    });

    const response = yield call(api.get, 'plans');

    const data = formatPlans(response.data);

    yield put(responseSuccess(data));
    toast.success('Plan resgitered');
  } catch (err) {
    toast.error('Failure to register a plan');
    yield put(requestFailure());
  }
}

export function* update({ payload }) {
  try {
    const { id } = payload;
    const { title, duration, price } = payload.plan;

    yield call(api.put, `plans/${id}`, {
      title,
      duration: Number(duration),
      price: parseFloat(price),
    });

    const response = yield call(api.get, 'plans');

    const data = formatPlans(response.data);

    yield put(responseSuccess(data));
    toast.success('Plan updated');
  } catch (err) {
    toast.error('Failure to update a plan');
    yield put(requestFailure());
  }
}

export function* deletePlan({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `plans/${id}`);

    const response = yield call(api.get, 'plans');

    yield put(responseSuccess(response.data));
    toast.warn('Plan deleted');
  } catch (err) {
    toast.error('Failure to register a plan');
    yield put(requestFailure());
  }
}

export default all([
  takeLatest('@plan/GET_REQUEST', request),
  takeLatest('@plan/REGISTER_REQUEST', register),
  takeLatest('@plan/UPDATE_REQUEST', update),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
