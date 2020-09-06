import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './componets/data/cards';
import Filter from './componets/data/filter';
import Errors from './componets/data/errors';

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
    
    const loadData = async () => {
      const loadURL = `https://api.spacexdata.com/v3/launches?limit=${state.limit}&launch_success=${state.launchSuccess}&land_success=${state.landSuccess}&launch_year=${String(state.year)}`;
      try {
        const result = await fetch(loadURL)
        const data = await result.json();
        console.log('cards', data, data.length);
        setData(data);
        setLoading(true);
      } catch(error) {
        console.log('Something went wrong!')
      }
    }
    
    const loadFilter = async () => {
      const filterURL = `https://api.spacexdata.com/v3/launches?limit=100`;
      try {
        const result = await fetch(filterURL)
        const data = await result.json();
        console.log('filters', data, data.length);
        setAllData(data);
        setLoading(true);
      } catch(error) {
          console.log('Something went wrong!')
      }
    }

    loadData();
    loadFilter();

  }, [state]);

  const getYearValue = (e) => {
    e.preventDefault();
    setState({
      ...state,
      year: e.target.value*1,
    });
  };

  const getLaunchValue = (e) => {
    e.preventDefault();
    setState({
      ...state,
      launchSuccess: e.target.value,
    });
  };
  
  const getLandValue = (e) => {
    e.preventDefault();
    setState({
      ...state,
      landSuccess: e.target.value,
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
          {
            loading ? (
              <Errors 
                data={data}
                state={state}
              />
            ) : (<p>Data loading... </p>)
          }
          
          {
            loading ? (
              <Data
                data={data}
              />
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