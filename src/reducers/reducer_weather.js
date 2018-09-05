import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // Return a entirely new array
    return [ action.payload.data, ...state ];
  }

  return state;
}