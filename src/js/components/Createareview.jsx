var React = require('react');
var $ = require('jquery');



var Createareview = React.createClass({
    getInitialState: function() {
        return {};
    },
  _handleSubmit: function(e) {
      e.preventDefault();
      var reviewObj = {
          score: this.refs.score.value,
          text: this.refs.text.value,
          userId: 1,
          profileId: 2
      };
      $.ajax({           
            url: '/createareview', 
            data: { reviewObj: reviewObj},
            type: 'POST',
            cache: false,           
            success: function() {
                this.setState({
                    dataStatus:"success"
                }) ;
            },
            error: function() {
              console.log('error');      
            }.bind(this)
        });
  },
  render: function() {
    return (
      <div>
        <form  id="reviewForm" onSubmit={this._handleSubmit}>
            <p> Please enter a score out of 10 </p>
            <input type="text" ref="score" placeholder="Score out of 10" />
            <p> Please enter your comments </p>
            <input ref="reviewText" type="textarea" />
            <button > Submit your review !</button>
        </form>
      </div>
    );
  }
});

module.exports = Createareview;