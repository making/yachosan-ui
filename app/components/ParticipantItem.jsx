var React = require('react');


var ParticipantItem = React.createClass({
  mixins : [],
  propTypes: {

  },
  render: function() {
    var styles = {};

    var participant = this.props.participant;
    return (
      <li>
        {participant.nickname} {participant.comment}
      </li>
    );
  }

});
module.exports = ParticipantItem;
