import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
<div className="d-flex align-items-center gap-3">
  <button className="btn btn-outline-secondary" onClick={this.decrement}>-</button>
  <h1 className="m-0">{this.props.count}</h1>
  <button className="btn btn-primary" onClick={this.increment}>+</button>
</div>
    );
  }
}

// pick the Redux state you want as props
const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
