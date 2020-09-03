import React from 'react';

const Filter = (props) => {
   const years = new Set(
    props.allData.map(
      year => year.launch_year
    )
  );
  
   const launch = new Set(
    props.allData.map(
      launch => launch.launch_success
    )
  );
  
   const landing = new Set(
    props.allData.map(
      landing => landing.rocket.first_stage.cores[0].land_success
    )
  );

  return (
    <div>
      <h2>Filters</h2>
      <ul className="filter-list">
        <h5>Launch Year</h5>
        {
          [...years].map((data, index) => (
            <li key={index + 1}><button value={data} onClick={props.yearValue}>{String(data)}</button></li>
          ))
        }
      </ul>

      <ul className="filter-list">
        <h5>Succesful Launch</h5>
        { 
          [...launch].map((data, index) => (
            <li key={index + 1}><button value={data} onClick={props.launchValue}>{String(data)}</button></li>
          ))
        }
      </ul>

      <ul className="filter-list">
        <h5>Succesful Landing</h5>
        {
        [...landing].map((data, index) => (
          <li key={index + 1}><button value={data} onClick={props.landValue}>{String(data)}</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Filter;
