import { FETCH_LOCATION } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LOCATION:
      // never mutate state
      return [action.payload.data];
  }
  return state;
}
