import produce from 'immer';

const INITIAL_STATE = {
  enrollments: [],
  loading: false,
  show: true,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/GET_REQUEST':
      case '@enrollment/REGISTER_REQUEST':
      case '@enrollment/UPDATE_REQUEST':
      case '@enrollment/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@enrollment/RESPONSE_SUCCESS': {
        draft.enrollments = action.payload.enrollments;
        draft.loading = false;
        break;
      }
      case '@enrollment/REQUEST_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@enrollment/SHOW_STUDENTS': {
        draft.show = action.payload.show;
        break;
      }
      default:
    }
  });
}
