import React from "react";

export default React.createClass({
  _onClick() {
    this.props.vote(this.props.entry);
  },
  render() {
    return (
      <button
          disabled={this.props.disabled}
          onClick={this._onClick}
      >
        <h1>{this.props.entry}</h1>
        {this.props.hasVotedFor
          ? <div className="label">{"Voted"}</div>
          : null
        }
      </button>
    );
  }
});
