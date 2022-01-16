
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "./actionTypes";

const initState = [];
export function bookmarkReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}
