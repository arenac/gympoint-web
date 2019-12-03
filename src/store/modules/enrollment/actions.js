export function getRequest(page) {
  return {
    type: '@enrollment/GET_REQUEST',
    payload: { page },
  };
}

export function responseSuccess(plans) {
  return {
    type: '@enrollment/RESPONSE_SUCCESS',
    payload: { plans },
  };
}

export function registerRequest(plan) {
  return {
    type: '@enrollment/REGISTER_REQUEST',
    payload: { plan },
  };
}

export function updateRequest(id, plan) {
  return {
    type: '@plenrollmentan/UPDATE_REQUEST',
    payload: { id, plan },
  };
}

export function deleteRequest(id) {
  return {
    type: '@enrollment/DELETE_REQUEST',
    payload: { id },
  };
}

export function requestFailure() {
  return {
    type: '@enrollment/REQUEST_FAILURE',
  };
}

export function showStudents(show) {
  return {
    type: '@enrollment/SHOW_STUDENTS',
    payload: { show },
  };
}
