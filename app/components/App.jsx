var React = require('react');
var ScheduleSelector = require('./ScheduleSelector.jsx');
var ScheduleViewer = require('./ScheduleViewer.jsx');

var App = React.createClass({
  mixins : [],
  propTypes: {

  },
  getInitialState: function () {
    return {scheduleId : '02a5bdbd-7441-448a-b9fd-97f58562563a'};
  },
  setScheduleId: function(scheduleId) {
    this.setState({scheduleId : scheduleId});
  },
  render: function() {
    var styles = {};

    return (
      <div>
        <ScheduleSelector setScheduleId={this.setScheduleId} />
        <ScheduleViewer scheduleId={this.state.scheduleId} />
      </div>
    );
  }

});
module.exports = App;
