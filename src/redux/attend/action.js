import { ADD_ATTENDING, REMOVE_ATTENDING } from "./actionTypes";

export function addToAttending(event) {
  return {
    type: ADD_ATTENDING,
    payload: event
  };
}

export function removeFromAttending(id) {
  return {
    type: REMOVE_ATTENDING,
    payload: id
  };
}
