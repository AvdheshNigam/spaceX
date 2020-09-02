import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Data from './componets/data/data';

function App(props) {

  const [ data, setData ] = useState([]);
  const [ allData, setAllData ] = useState([]);

  let [ state, setState ] = useState({
    limit: 100,
    year: 2014,
    launchSuccess: true,
    landSuccess: true
  });
  
  console.log(state);

  useEffect(() => {
    const loadData = async () => {
      await axios.get(`https://api.spacexdata.com/v3/launches?limit=${state.limit}&amp;launch_success=${state.launchSuccess}&amp;land_success=${state.launchSuccess}&amp;launch_year=${state.year}`)
      //https://api.spacexdata.com/v3/launches?limit=100

      .then(res => {
        console.log('cards', res, res.data.length);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    const loadFilter = async () => {
      await axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then(res => {
        console.log('filters', res, res.data.length);
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    loadData();
    loadFilter();
  }, []);

  let years = new Set(
    allData.map(
      year => year.launch_year
    )
  );

  let launch = new Set(
    allData.map(
      launch => launch.launch_success
    )
  );

  let landing = new Set(
    allData.map(
      landing => landing.rocket.first_stage.cores[0].land_success
    )
  );

  const getYearValue = (event) => {
    event.preventDefault();
    setState({
      ...state,
      year: event.target.value,
    });
  };

  const getLaunchValue = (event) => {
    event.preventDefault();
    setState({
      ...state,
      launchSuccess: event.target.value
    });
  };
  
  const getLandValue = (event) => {
    event.preventDefault();
    setState({
      ...state,
      landSuccess: event.target.value,
    });
  };

  return (

    <div className="layout">
    <div className="header">
      <h1>SpaceX Lauches Programs <span>Limit: <i>{state.limit}</i>, Year Data: <i>{state.year}</i>, Succesful Launch: <i>{String(state.launchSuccess)}</i>, Succesful Landing: <i>{String(state.landSuccess)}</i></span></h1>
    </div>

    <div className="row">
      <div className="side">
        <h2>Filters</h2>
        <ul className="filter-list">
          <h5>Launch Year</h5>

          {
            [...years].map((data, index) => (
              <li key={index + 1}><button value={data} onClick={getYearValue}>{String(data)}</button></li>
            ))
          }
        </ul>

        <ul className="filter-list">
          <h5>Succesful Launch</h5>
          { 
            [...launch].map((data, index) => (
              <li key={index + 1}><button value={data} onClick={getLaunchValue}>{String(data)}</button></li>
            ))
          }
        </ul>

        <ul className="filter-list">
          <h5>Succesful Landing</h5>
          {
           [...landing].map((data, index) => (
            <li key={index + 1}><button value={data} onClick={getLandValue}>{String(data)}</button></li>
            ))
          }
        </ul>
      </div>

      <div className="main">
        <div className="row">
        { 
          data.map((data, index) => (
          <Data
            key={index + 1}
            image={data.links.mission_patch_small} 
            flightName={data.mission_name} 
            flightNumber={data.flight_number}
            missionID={data.mission_id}
            launchYear={data.launch_year}
            lauchSuccess={data.launch_success}
            cores={data.rocket.first_stage.cores}
          />
          ))}
        </div>
      </div>
      
    </div>
    <div className="footer">
        <h2>Avdhesh Kumar Nigam</h2>
      </div>
  </div>

  );
}

export default App;
