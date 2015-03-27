var React = require('react');


var ScheduleSelector = React.createClass({
  mixins : [],
  propTypes: {

  },
  handleSubmit: function(e) {
    e.preventDefault();
    var scheduleId = this.refs.scheduleId.getDOMNode().value.trim();
    this.props.setScheduleId(scheduleId);
    return;
  },
  render: function() {
    var styles = {};

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="ScheduleId" ref="scheduleId" />
          <input type="submit" value="スケジュール情報をみる" />
        </form>
      </div>
    );
  }

});
module.exports = ScheduleSelector;
