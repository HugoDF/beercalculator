var React = require('react');
var pen = '\uD83D\uDD8B';
var containers = require('./containers.json');


var ContainerSize = React.createClass({
  getInitialState: function(){
    return { manual: false, active: '0'};
  },
  render: function(){
    var _this = this;
    var displayInput = this.state.manual? {display: 'inline-block'}: {display:'none'};
    var button= function(obj, index){
      return <div className={(_this.state.active == index)? 'selection active' :'selection'} onClick={_this.handleButtonClick} key={index+obj.value} data-value={obj.mL_equiv} data-index={index}>{obj.value + obj.unit}</div>;
    };
    return (
      <div className="container-size">
        <label>Container Size <span className="pen-button" onClick={this.showManual}>{pen}</span></label>
        <input style={displayInput} type="number" value={this.props.containerSize} onChange={this.handleChange}/>
        <div className="size-select-container select-container">
          <div className="select-inner">
            {containers.map(button)}
          </div>
        </div>
      </div>
      )
  },
  handleChange: function(event){
    var newValue = event.target.value;
    this.props.containerSizeUpdate(newValue);
  },
  handleButtonClick: function(event){
    var newValue = event.target.getAttribute('data-value');
    var index = event.target.getAttribute('data-index');
    this.props.containerSizeUpdate(newValue);
    this.setState({active: index});
  },
  showManual: function(){
    this.setState({manual: !this.state.manual});
  }
});

module.exports = ContainerSize;