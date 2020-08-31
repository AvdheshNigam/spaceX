import React from 'react';
import './App.css';
import SpaceX from './componets/spaceX/spaceX';
import Filters from './componets/spaceX/filters';

function App() {
  return ( 
    <div className="layout">

      <div className="header">
        <h1>SpaceX Lauches Programs</h1>
      </div>

      <div className="row">
        <div className="side">
          <h2>Filters</h2>
          <Filters />
        </div>

        <div className="main">
          <SpaceX />
        </div>
      </div>

    </div>

  );
}

export default App;
