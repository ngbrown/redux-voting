import React from "react";
import VotingButton from "./VotingButton";

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return (
      <div className="voting">
        {this.getPair().map(entry => (
          <VotingButton
              entry={entry}
              key={entry}
              vote={this.props.vote}
          />
        ))}
      </div>);
  }
});
