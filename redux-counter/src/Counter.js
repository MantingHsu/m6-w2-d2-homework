import React from "react";

export default class Counter extends React.Component {
  state = { count: 0 }; // initialize to 0

  increment = () => this.setState((prev) => ({ count: prev.count + 1 }));
  decrement = () => this.setState((prev) => ({ count: prev.count - 1 }));

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement} aria-label="decrement">-</button>
        <button onClick={this.increment} aria-label="increment">+</button>
      </div>
    );
  }
}
