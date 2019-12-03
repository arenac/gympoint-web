export function getRequest(page) {
  return {
    type: '@enrollment/GET_REQUEST',
    payload: { page },
  };
}

export function responseSuccess(enrollments) {
  return {
    type: '@enrollment/RESPONSE_SUCCESS',
    payload: { enrollments },
  };
}

export function registerRequest(enrollment) {
  return {
    type: '@enrollment/REGISTER_REQUEST',
    payload: { enrollment },
  };
}

export function updateRequest(id, enrollment) {
  return {
    type: '@enrollment/UPDATE_REQUEST',
    payload: { id, enrollment },
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

export function showEnrollments(show) {
  return {
    type: '@enrollment/SHOW_STUDENTS',
    payload: { show },
  };
}
