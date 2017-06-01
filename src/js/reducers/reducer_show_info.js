import { SHOW_INFO } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case SHOW_INFO:
      // never mutate state
      return action.payload;
    default:
      return state;
  }
}
