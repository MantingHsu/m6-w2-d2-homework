import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h2>Local State Counter (pre-Redux)</h2>
      <Counter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
