import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";

// 1) Initial state
const initialState = { count: 0 };

// 2) Reducer (pure function; always return new state, don't mutate)
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state; // important fallback
  }
}

// 3) Create store
const store = createStore(reducer);

// 4) App defined here (skip App.js)
function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>Redux Counter</h2>
      <Counter />
    </div>
  );
}

// 5) Wrap with Provider so connected components can access the store
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
