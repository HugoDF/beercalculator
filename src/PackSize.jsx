var React = require('react');
var packs = require('./packs.json');
var pen = '\uD83D\uDD8B';

var PackSize = React.createClass({
  getInitialState: function(){
    return { manual: false, active: '6'};
  },
  render: function(){
    var _this = this;
    var displayInput = this.state.manual? {display: 'inline-block'}: {display:'none'};
    var button= function(obj, index){
      return <div className={(_this.state.active == index)? 'selection active' :'selection'} onClick={_this.handleButtonClick} key={index+obj} data-value={obj} data-index={index}>{obj}</div>;
    };
    return (
      <div className="pack-size">
        <label>Pack Size <span className="pen-button" onClick={this.showManual}>{pen}</span></label>
        <input style={displayInput} type="number" value={this.props.packSize} onChange={this.handleChange}/>
        <div className="select-container select-container">
          <div className="select-inner">
            {packs.map(button)}
          </div>
        </div>
      </div>
      )
  },
  handleChange: function(event){
    var newValue = event.target.value;
    this.props.packSizeUpdate(newValue);
  },
  handleButtonClick: function(event){
    var newValue = event.target.getAttribute('data-value');
    var index = event.target.getAttribute('data-index');
    this.props.packSizeUpdate(newValue);
    this.setState({active: index});
  },
  showManual: function(){
    this.setState({manual: !this.state.manual});
  }
});
module.exports = PackSize