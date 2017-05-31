import { HISTORY_SELECTED } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case HISTORY_SELECTED:
      // never mutate state
      return action.payload;
    default:
      return state;
  }
}
