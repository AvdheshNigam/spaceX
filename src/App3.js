import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Data from './componets/data/data';

function App(props) {

 var [ state, setState ] = useState({
    limit: 100,
    year: 2014,
    launchSuccess: true,
    landSuccess: true
  });
  
  console.log('Outside 1', state);

  useEffect(() => {
    console.log('Inside useEffect', setState(state => ({ ...state, year: props.year })));
    
  }, [props.year]);

  console.log('Outside 2', state);
 
  return (

    <div className="layout">
    <div className="header">
      <h1>SpaceX Lauches Programs <span>Limit: <i>{state.limit}</i>, Year Data: <i>{state.year}</i>, Succesful Launch: <i>{String(state.launchSuccess)}</i>, Succesful Landing: <i>{String(state.landSuccess)}</i> </span></h1>
    </div>
  </div>

  );
}

export default App;
