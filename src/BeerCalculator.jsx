var React = require('react');
var CalcResults = require('./CalcResults.jsx');
var AlcoholLevel = require('./AlcoholLevel.jsx');
var ContainerSize = require('./ContainerSize.jsx');
var PackSize = require('./PackSize.jsx');
var pen = '\uD83D\uDD8B';
var ReactSlider = require('react-slider');

var Price = React.createClass({
  render: function(){
    return (
      <div className="price">
        <label>Price</label>
        <div className="select-container">
          <input type="range" defaultValue={this.props.price} onChange={this.handleChange} min={0} max={50} step={0.1}/>
        </div>
        <input type="number" value={this.props.price} onChange={this.handleChange}/>
        <br/>
        <label>People Drinking (optional)</label>
        <div className="select-container">
          <input type="range" defaultValue={this.props.personCount} onChange={this.handlePersonCountChange} min={0} max={20} step={1}/>
        </div>
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

var SubmitButton = React.createClass({
  render: function(){
    return (
      <div className="submit-button" onClick={this.props.toggleShowResults}>
        See Results
      </div>
      )
  }
});

var BeerCalculator = React.createClass({
  getInitialState: function(){
    return {
      abv: '3.8',
      containerSize: '330',
      packSize: '12',
      price: '20',
      personCount: '1',
      showResults: false
    };
  },
  render: function(){
    var submitButtonStyles = (!this.state.showResults)? {display: ''}: {display: 'none'};
    var resultsStyles = (this.state.showResults)? {display: ''}: {display: 'none'};
    return (
      <div className="beer-calculator">
        <h1>Beer Calculator</h1>
        <div className="section">
          <AlcoholLevel 
            abvUpdate={this.abvUpdate} 
            abv={this.state.abv}/>
        </div>
        <div className="section">
          <ContainerSize 
            containerSizeUpdate={this.containerSizeUpdate} 
            containerSize={this.state.containerSize}/>
        </div>
        <div className="section">
          <PackSize 
            packSizeUpdate={this.packSizeUpdate} 
            packSize={this.state.packSize}/>
        </div>
        <div className="section">
          <Price 
            priceUpdate={this.priceUpdate}
            personCountUpdate={this.personCountUpdate}
            price={this.state.price}
            personCount={this.state.personCount}/>
        </div>
        <div className="section">
          <SubmitButton
            showSubmitButton={!this.state.showResults}
            toggleShowResults={this.toggleShowResults}
            showResults={this.state.showResults}/>
        </div>
        <div className="section">
          <CalcResults
            showResults={this.state.showResults}
            abv={this.state.abv} 
            containerSize={this.state.containerSize}
            packSize={this.state.packSize}
            price={this.state.price}
            personCount={this.state.personCount}/>
        </div>
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
  },
  toggleShowResults: function(){
    this.setState({showResults: !this.state.showResults});
  }
});

module.exports = BeerCalculator;