export function getRequest(page) {
  return {
    type: '@plan/GET_REQUEST',
    payload: { page },
  };
}

export function responseSuccess(plans) {
  return {
    type: '@plan/RESPONSE_SUCCESS',
    payload: { plans },
  };
}

export function registerRequest(plan) {
  return {
    type: '@plan/REGISTER_REQUEST',
    payload: { plan },
  };
}

export function updateRequest(id, plan) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { id, plan },
  };
}

export function deleteRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}

export function requestFailure() {
  return {
    type: '@plan/REQUEST_FAILURE',
  };
}

export function showStudents(show) {
  return {
    type: '@plan/SHOW_STUDENTS',
    payload: { show },
  };
}
