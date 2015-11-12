import React from "react";
import VotingButton from "./VotingButton";

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return (
      <div className="voting">
        {this.getPair().map(entry => (
          <VotingButton
              disabled={this.isDisabled()}
              entry={entry}
              hasVotedFor={this.hasVotedFor(entry)}
              key={entry}
              vote={this.props.vote}
          />
        ))}
      </div>);
  }
});
