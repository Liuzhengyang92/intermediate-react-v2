import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENTION__ !== undefined
    ? window.__REDUX_DEVTOOLS_EXTENTION__()
    : f => f
);

export default store;
