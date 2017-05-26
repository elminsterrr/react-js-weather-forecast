import { FETCH_WEATHER } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // never mutate state
      return state.concat([action.payload.data]);
  }
  return state;
}
