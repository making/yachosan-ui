var React = require('react');


var Description = React.createClass({
  mixins : [],
  propTypes: {

  },
  render: function() {
    var styles = {};

    var schedule = this.props.schedule;
    return (
      <div>
        <h1>{schedule.scheduleName}</h1>
        <p>{schedule.scheduleDescription}</p>
        <p>作成日: {schedule.createdAt} 更新日: {schedule.updatedAt}</p>
      </div>
    );
  }

});
module.exports = Description;
