
var React = require('react');
var SearchBar = require("./SearchBar");

var Link = require("react-router").Link;



var HeaderOther = React.createClass({
    render: function() {
    return (
         <div className="header-text headerother">
         
            <Link className="header-title" to={"/"}>onSet</Link>
            
               <SearchBar className="searchbar" />
        </div>
    );
  }
});

module.exports = HeaderOther;