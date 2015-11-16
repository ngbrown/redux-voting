import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import {connect} from "react-redux";
import Winner from "./Winner";
import Vote from "./Vote";
import * as actionCreators from "../action_creators";

// Pure component (react-redux "dumb")
export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        {this.props.winner
          ? <Winner ref="winner"
              winner={this.props.winner}
            />
          : <Vote {...this.props} />}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    hasVoted: state.get("hasVoted"),
    pair: state.getIn(["vote", "pair"]),
    winner: state.get("winner")
  };
}

// Connected component (react-redux "smart")
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
