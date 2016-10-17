import React from 'react';

const HeroBanner = React.createClass({
  render: function () {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="text-container">
            <p>Acino Stories</p>
            <h1>We provide medical education in Central America</h1>
            <p>Acino's event "Cumbre Acino: Medicina de Altura" was held in Guatemala on April 29th</p>
            <button className="button">FIND OUT MORE</button>
          </div>
        </div>
      </div>
    )
  }
});

export default HeroBanner;