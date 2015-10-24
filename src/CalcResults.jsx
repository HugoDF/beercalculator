var React = require('react');

var IndividualStats = React.createClass({
  render: function(){
    return (
      <div className="individual-stats">
        <h2>Number of units: {this.props.unitCount.toFixed(1)}</h2>
        <h2>£{this.props.pricePerLitre.toFixed(2)}/L</h2>
        <h2>£{this.props.pricePerLitreOfAlcohol.toFixed(2)}/L of Alcohol</h2>
        <h2>Price per {this.props.containerSize}mL Container: £{this.props.pricePerCan.toFixed(2)}</h2>
      </div>
      )
  }
});
var PerPersonStats = React.createClass({
  render: function(){
    var pricePerPerson = this.props.price/ this.props.personCount;
    var containersPerPerson = this.props.packSize/this.props.personCount;
    var alcoholPerPerson = this.props.alcoholVolume / this.props.personCount;
    var unitsPerPerson = this.props.unitCount/this.props.personCount;
    return(
      <div className="per-person-stats">
        <h2>£{pricePerPerson.toFixed(2)}/person</h2>
        <h2>{this.props.containerSize}mL containers per person: {containersPerPerson.toFixed(0)}</h2>
        <h2>Alcohol content per Person: {alcoholPerPerson.toFixed(0)}mL</h2>
        <h2>{unitsPerPerson.toFixed(1)} units per person</h2>
      </div>
      )
  }
});
var CalcResults = React.createClass({
  render: function(){
    var isOnePerson = (parseInt(this.props.personCount) <= 1);

    // unit: L
    var totalVolume = (this.props.containerSize * this.props.packSize)/1000;
    // unit: mL
    var alcoholVolume = totalVolume * (this.props.abv/100) * 1000;

    // 1 unit = 10 mL of alcohol
    var totalUnits = alcoholVolume / 10;

    
    var pricePerLitre = (this.props.price > 0)? this.props.price/ totalVolume : 0;
    var pricePerLitreOfAlcohol = pricePerLitre / (this.props.abv/100);
    var pricePerCan = (this.props.price > 0 )? this.props.packSize / this.props.price : 0;
    var resultsStyle = (this.props.showResults)? {display: 'block'}: {display: 'none'};
    return (
      <div style={resultsStyle} className="calc-results">
        <h1>Summary</h1>
        <h2>Total alcohol volume: {alcoholVolume.toFixed(0)}mL</h2>
        {
          !isOnePerson?'':<IndividualStats
                            alcoholVolume={alcoholVolume}
                            unitCount={totalUnits}
                            pricePerLitre={pricePerLitre}
                            pricePerLitreOfAlcohol={pricePerLitreOfAlcohol}
                            pricePerCan={pricePerCan}
                            containerSize={this.props.containerSize}/>

        }
        {
          isOnePerson?'':<PerPersonStats 
                          price={this.props.price}
                          personCount={this.props.personCount}
                          packSize={this.props.packSize}
                          alcoholVolume={alcoholVolume}
                          unitCount={totalUnits}unitCount={totalUnits}
                          containerSize={this.props.containerSize}/>
        }
      </div>
    )
  }
});

module.exports = CalcResults;