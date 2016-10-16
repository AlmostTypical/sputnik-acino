import React from 'react';

import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        <HeroBanner />
      </div>
    )
  }
});

export default App;