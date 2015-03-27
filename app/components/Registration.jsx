var React = require('react');


var Registration = React.createClass({
  mixins : [],
  propTypes: {

  },
  onSubmit: function (e) {
    e.preventDefault();
    alert('未実装！');
    console.log(this.refs);
  },
  render: function() {
    var styles = {};
    var proposedDates = this.props.schedule.proposedDates.map(function (x) {
      return (
        <li key={x}>
        {x}
          <label>
              <input type="radio" ref="replies" value="OK">いける</input>
          </label>
          <label>
              <input type="radio" ref="replies" value="MAYBE">多分いける</input>
          </label>
          <label>
              <input type="radio" ref="replies" value="NG">いけない</input>
          </label>
        </li>);
    });
    
    return (
      <form onSubmit={this.onSubmit}>
        <dl>
          <dt><label htmlFor="nickname">ニックネーム</label></dt>
          <dd><input id="nickname" ref="nickname" placeholder="Nickname" /></dd>
          <dt><label htmlFor="comment">コメント</label></dt>
          <dd><input id="comment" ref="comment" placeholder="Comment" /></dd>
        </dl>
        {proposedDates}
        <input type="submit" value="登録" />
      </form>
    );
  }

});
module.exports = Registration;
