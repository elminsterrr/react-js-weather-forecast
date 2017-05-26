import { HISTORY_SELECTED } from '../actions/index.js';

export default function (state = null, action) {
  switch (action.type) {
    case HISTORY_SELECTED:
      // never mutate state
      return action.payload;
  }
  return state;
}
