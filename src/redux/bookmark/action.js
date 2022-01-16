
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "./actionTypes";

export function addToBookmark(event) {
  return {
    type: ADD_BOOKMARK,
    payload: event
  };
}

export function removeFromBookmark(id) {
  return {
    type: REMOVE_BOOKMARK,
    payload: id
  };
}
