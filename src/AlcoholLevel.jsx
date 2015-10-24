var React = require('react');
var pen = '\uD83D\uDD8B';
var levels = require('./levels.json');
var AlcoholLevel = React.createClass({
  getInitialState: function(){
    return {
      manual: false,
      active: '0'
    };
  },
  render: function(){
    var _this = this;
    var displayInput = this.state.manual? {display: 'inline-block'}: {display:'none'};
    var alcoholButton= function(obj, index){
      return <div className={(_this.state.active == index)? 'selection active' :'selection'} onClick={_this.handleButtonClick} key={index+obj} data-value={obj} data-index={index}>{obj + '%'}</div>;
    };
    return (
      <div className="alcohol-level">
        <label>Alcohol Level <span className="pen-button" onClick={this.showManual}>{pen}</span></label>
        <input style={displayInput} type="number" value={this.props.abv} onChange={this.handleChange}/>
        <div className="select-abv select-container">
          {levels.map(alcoholButton)}
        </div>
      </div>
      );
  },
  handleChange: function(event){
    var newValue = event.target.value;
    this.props.abvUpdate(newValue);
  },
  handleButtonClick: function(event){
    var newValue = event.target.getAttribute('data-value');
    var index = event.target.getAttribute('data-index');
    this.props.abvUpdate(newValue);
    this.setState({active: index});
  },
  showManual: function(){
    this.setState({manual: !this.state.manual});
  }
});

module.exports = AlcoholLevel;