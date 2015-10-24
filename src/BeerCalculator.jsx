var React = require('react');
var CalcResults = require('./CalcResults.jsx');
var AlcoholLevel = React.createClass({
  render: function(){
    return (
      <div className="alcohol-level">
        <label>Alcohol Level</label>
        <input type="number" value={this.props.abv} onChange={this.handleChange}/>
      </div>
      );
  },
  handleChange: function(event){
    var newValue = event.target.value;
    this.props.abvUpdate(newValue);
  }
});

var ContainerSize = React.createClass({
  render: function(){
    return (
      <div className="container-size">
        <label>Container Size</label>
        <input type="number" value={this.props.containerSize} onChange={this.handleChange}/>
      </div>
      )
  },
  handleChange: function(event){
    var newValue = event.target.value;
    this.props.containerSizeUpdate(newValue);
  }
});

var PackSize = React.createClass({
  render: function(){
    return (
      <div className="pack-size">
        <label>Pack Size</label>
        <input type="number" value={this.props.packSize} onChange={this.handleChange}/>
      </div>
      )
  },
  handleChange: function(event){
    var newValue = event.target.value;
    this.props.packSizeUpdate(newValue);
  }
});

var Price = React.createClass({
  render: function(){
    return (
      <div className="price">
        <label>Price</label>
        <input type="number" value={this.props.price} onChange={this.handleChange}/>
        <br/>
        <label>People Drinking (optional)</label>
        <input type="number" value={this.props.personCount} onChange={this.handlePersonCountChange}/>
      </div>
      )
  },
  handleChange: function(event){
    var newValue = (event.target.value > 0 ) ? event.target.value : 0;
    this.props.priceUpdate(newValue);
  },
  handlePersonCountChange: function(event){
    var newValue = event.target.value;
    this.props.personCountUpdate(newValue);
  }
});

var BeerCalculator = React.createClass({
  getInitialState: function(){
    return {
      abv: '4',
      containerSize: '330',
      packSize: '12',
      price: '20',
      personCount: '1'
    };
  },
  render: function(){
    return (
      <div className="beer-calculator">
        <h1>Beer Calculator</h1>
        <AlcoholLevel 
          abvUpdate={this.abvUpdate} 
          abv={this.state.abv}/>
        <ContainerSize 
          containerSizeUpdate={this.containerSizeUpdate} 
          containerSize={this.state.containerSize}/>
        <PackSize 
          packSizeUpdate={this.packSizeUpdate} 
          packSize={this.state.packSize}/>
        <Price 
          priceUpdate={this.priceUpdate}
          personCountUpdate={this.personCountUpdate}
          price={this.state.price}
          personCount={this.state.personCount}/>
        <CalcResults 
          abv={this.state.abv} 
          containerSize={this.state.containerSize}
          packSize={this.state.packSize}
          price={this.state.price}
          personCount={this.state.personCount}/>
      </div>
      );
  },
  abvUpdate: function(newValue){
    this.setState({abv: newValue});
  },
  packSizeUpdate: function(newValue){
    this.setState({packSize: newValue});
  },
  containerSizeUpdate: function(newValue){
    this.setState({containerSize: newValue});
  },
  priceUpdate: function(newValue){
    this.setState({price: newValue});
  },
  personCountUpdate: function(newValue){
    this.setState({personCount: newValue});
  }
});

module.exports = BeerCalculator;