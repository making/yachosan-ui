var React = require('react');
var Description = require('./Description.jsx');
var Registration = require('./Registration.jsx');
var Participants = require('./Participants.jsx');

var rest = require('rest');
var mime = require('rest/interceptor/mime');
var errorCode = require('rest/interceptor/errorCode');

var client = rest.wrap(mime).wrap(errorCode);

var ScheduleViewer = React.createClass({
  mixins : [],
  propTypes: {

  },
  getInitialState: function () {
      return {schedule : {
        scheduleName : 'Loading...',
        scheduleDescription : 'Loading...',
        createdAt : 'Loading...',
        updatedAt : 'Loading...',
        participants : [],
        proposedDates : [],
        scheduleId : this.props.scheduleId
      }};
  },
  loadSchedule: function (scheduleId) {
    if (scheduleId) {
      client({path: 'http://yachosan-api.herokuapp.com/api/v1/schedules/' + scheduleId})
        .then(function (response) {
            this.setState({schedule : response.entity});
        }.bind(this), function(response) {
            console.error('response error: ', response);
            alert(scheduleId + ' -> ' + response.status.text + '(' + response.status.code + ')');
        }.bind(this));
    }
  },
  componentDidMount: function () {
    this.loadSchedule(this.props.scheduleId);
  },
  componentWillReceiveProps: function(props) {
    this.loadSchedule(props.scheduleId);
  },
  render: function() {
    var styles = {};
    return (
      <div>
        <Description schedule={this.state.schedule} />
        <Registration schedule={this.state.schedule} />
        <Participants participants={this.state.schedule.participants} />
      </div>
    );
  }

});
module.exports = ScheduleViewer;
