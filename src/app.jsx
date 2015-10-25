var React = require('react');
var ReactDOM = require('react-dom');
var BeerCalculator = require('./BeerCalculator.jsx');
var WebCam = require('react-webcam');
var ImageUpload = React.createClass({
  render: function(){
    return (
      <div>
        <WebCam/>     
      </div>
      )
  }
});

ReactDOM.render(
  <WebCam/>,
  document.getElementById('beercalculator')
);