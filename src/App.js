import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import axios from 'axios';
import Data from './componets/data/data';

function App(props) {

  const [data, setData] = useState([]);
  const url = `https://api.spacexdata.com/v3/launches?limit=100`;
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get(url)
    .then(res => {
      console.log(res, res.data.length);
      setData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const [ value, setValue ] = useState({
    value: '',
  });
  
  console.log("dddhd", value);

  const ValueContext = React.createContext({
    value
  })
  console.log("vcccc", ValueContext);


  let years = new Set(
    data.map(
      year => year.launch_year
    )
  );

  let launch = new Set(
    data.map(
      launch => launch.launch_success
    )
  );

  let landing = new Set(
    data.map(
      landing => landing.rocket.first_stage.cores[0].land_success
    )
  );

  const getValue = (event) => {
    setValue({
      value: event.target.value,
    });
    console.log("btn value", value);
  };

  return ( 
    <div className="layout">

      <div className="header">
        <h1>SpaceX Lauches Programs</h1>
      </div>

      <div className="row">
        <div className="side">
          <h2>Filters</h2>
          <ul className="filter-list">
            <h5>Launch Year</h5>

            {
              [...years].map((data, index) => (
                <li key={index + 1}><button value={data} onClick={getValue}>{String(data)}</button></li>
              ))}
          </ul>

          <ul className="filter-list">
            <h5>Succesful Launch</h5>
            { [...launch].map((data, index) => (
              <li key={index + 1}><button value={data} onClick={getValue}>{String(data)}</button></li>
            ))}
          </ul>

          <ul className="filter-list">
            <h5>Succesful Landing</h5>
            { [...landing].map((data, index) => (
              <li key={index + 1}><button value={data} onClick={getValue}>{String(data)}</button></li>
            ))}
          </ul>
        </div>

        <div className="main">
          <div className="row">
          { 
            data.map((data) => (
            <Data 
              image={data.links.mission_patch_small} 
              fightName={data.mission_name} 
              fightNumber={data.flight_number}
              missionID={data.mission_id}
              launchYear={data.launch_year}
              lauchSuccess={data.launch_success}
              cores={data.rocket.first_stage.cores}
            />
            ))}
          </div>
        </div>
        
      </div>
      <div class="footer">
          <h2>Avdhesh Kumar Nigam</h2>
        </div>
    </div>

  );
}

export default App;
