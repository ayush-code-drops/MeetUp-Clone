import { combineReducers, createStore } from "redux";
import { appReducer } from "./redux/app/reducer";
import { authReducer } from "./redux/auth/reducer";
import { bookmarkReducer } from "./redux/bookmark/reducer";
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  bookmarks: bookmarkReducer
});

export const store = createStore(
  rootReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);