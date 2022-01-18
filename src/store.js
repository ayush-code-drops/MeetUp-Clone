import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./redux/app/reducer";
import { attendingReducer } from "./redux/attend/reducer";
import { authReducer } from "./redux/auth/reducer";
import { bookmarkReducer } from "./redux/bookmark/reducer";


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  bookmarks: bookmarkReducer,
  attending: attendingReducer
});

export const store = createStore(rootReducer,enhancer);
