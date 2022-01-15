import { ADD_ATTENDING, REMOVE_ATTENDING } from "./actionTypes";

const initState = [];
export function attendingReducer(state = initState, action) {
  switch (action.type) {
    case ADD_ATTENDING:
      return [...state, action.payload];
    case REMOVE_ATTENDING:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}
