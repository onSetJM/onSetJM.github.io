
import React, { PropTypes as T } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
var history = require('react-router').browserHistory;


var HowItWorksButton = React.createClass({
    redirect: function () {
      return (
        history.push("/")
        )
    },
    render: function(){
    return (
      <div>
        <ButtonToolbar>
             <Button onClick={this.redirect}>How It Works</Button>
        </ButtonToolbar>
      </div>
    );
    }
});

module.exports = HowItWorksButton;