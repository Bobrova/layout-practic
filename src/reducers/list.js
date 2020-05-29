import {
  SET_SOMETHING,
} from 'constants/ActionTypes';

const initialState = {
  list: [],
};

export default function list(state = initialState.list, action) {
  switch (action.type) {
    case SET_SOMETHING: {
      return state;
    }

    default:
      return state;
  }
}
