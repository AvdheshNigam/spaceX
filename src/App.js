import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Data from './componets/data/data';
import Filter from './componets/data/filter';

function App(props) {

  const [ data, setData ] = useState([]);
  const [ allData, setAllData ] = useState([]);
  const [ loading, setLoading] = useState(false);

  const [ state, setState ] = useState({
    limit: 100,
    year: '',
    launchSuccess: '',
    landSuccess: ''
  });

  useEffect(() => {
    const url = `https://api.spacexdata.com/v3/launches?limit=${state.limit}&launch_success=${state.launchSuccess}&land_success=${state.landSuccess}&launch_year=${String(state.year)}`;
    const loadData = async () => {
      await axios.get(url)
      .then(res => {
        console.log('cards', res, res.data.length);
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    const loadFilter = async () => {
      const loadURL = `https://api.spacexdata.com/v3/launches?limit=100`;
      await axios.get(loadURL)
      .then(res => {
        console.log('filters', res, res.data.length);
        setAllData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    loadData();
    loadFilter();

  }, [state]);

  const getYearValue = (event) => {
    event.preventDefault();
    setState({
      ...state,
      year: event.target.value*1,
    });
  };

  const getLaunchValue = (event) => {
    event.preventDefault();
    setState({
      ...state,
      launchSuccess: event.target.value,
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
      <h1>SpaceX Lauches Programs</h1>
    </div>

    <div className="row">
      <div className="side">
        {
          loading ? (
            <Filter
              allData={allData}
              yearValue={getYearValue}
              launchValue={getLaunchValue}
              landValue={getLandValue}
            />
          ) : (<p>Data loading... </p>)
        }
      </div>

      <div className="main">
        <div className="row">
          <div className="error">
            {
              data.length === 0 ? (
                loading ? (
                  <h1>Result not found</h1>
                ) : (<p>Data loading... </p>)
              ):
              <h1>
              <span>
                Limit: <i>{state.limit}</i>, 
                Year Data: <i>{state.year}</i>, 
                Succesful Launch: <i>{String(state.launchSuccess)}</i>, 
                Succesful Landing: <i>{String(state.landSuccess)}</i>,
                Count: {data.length}
              </span>
            </h1>
            }
          </div>
          {
            loading ? (
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
              ))
            ) : (<p>Data loading... </p>)
          }

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