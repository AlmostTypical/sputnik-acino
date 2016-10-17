import React from 'react';

const HeroBanner = React.createClass({
  render: function () {
    return (
      <div className="panel">
        <div className="container" id="panel">
          <p>Acino Stories</p>
          <p>We provide medical education in Central America</p>
          <p>Acino's event "Cumbre Acino: Medicina de Altura" was held in Guatemala on April 29th</p>
          <button>FIND OUT MORE</button>
        </div>
      </div>
    )
  }
});

export default HeroBanner;