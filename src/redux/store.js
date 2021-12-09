import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducer";

const store = configureStore({
  reducer: gameReducer,
  devTools: process.env.NODE_ENV === "development",
});

export default store;

// ======================================================================
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import gameReducer from "./reducer";

// const store = createStore(
//   gameReducer,
//   composeWithDevTools()
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
