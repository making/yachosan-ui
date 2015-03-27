var React = require('react');
var ParticipantItem = require('./ParticipantItem.jsx');


var Participants = React.createClass({
  mixins : [],
  propTypes: {

  },
  render: function() {
    var styles = {};
    var views = this.props.participants.map(function (x) {
      return (
        <ParticipantItem key={x.nickname} participant={x} />
      );
    });
    return (
      <ul>
        {views}
      </ul>
    );
  }

});
module.exports = Participants;
