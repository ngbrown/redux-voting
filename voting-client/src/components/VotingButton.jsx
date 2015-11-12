import React from "react";

export default React.createClass({
  _onClick() {
    this.props.vote(this.props.entry);
  },
  render() {
    return (
      <button onClick={this._onClick}>
        <h1>{this.props.entry}</h1>
      </button>
    );
  }
});
