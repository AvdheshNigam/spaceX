import React from 'react';
import './App.css';
import useData from './componets/data/data';

function App() {
  let [data] = useData();

 

  // const arr = [
  //   {name: 'abc', mob: '123'},
  //   {name: 'abc', mob: '456'},
  //   {name: 'xyz', mob: '678'}
  // ]

  // console.log("ddddd", arr.map(data => data.name))
  // const unique = new Set(arr.map(data => data.name));
  // console.log("uuuuu", unique)

  // let a = data.map(data => data.launch_year);
  // console.log("A", a);

  // let b = new Set(data.map(data => data.launch_year));
  // console.log("B", b);

  // let tempArr = [];
  // let tempMap = {};
  // data.forEach(item => {
  //   tempMap[item.launch_year] = item;
  // })
  // Object.keys(tempMap).forEach(item=>{
  //   tempArr.push(item)
  // })

  // const rocket = {
  //   first_stage:{
  //     rocket_id: 1,
  //     cores: [
  //       {
  //         flight: 1,
  //         land_success: null
  //     }
  //     ],

  //   }
  // }
  // console.log(rocket.first_stage.cores[0].land_success)

  let unique = new Set(data.map((data, index) => data.launch_year));

  
 

  console.log("B", unique);

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
            {unique}
            
            {/* { data.map((data, index) => (
              <li key={index + 1}><button>{data.launch_year}</button></li>
            ))} */}
          </ul>

          <ul className="filter-list">
            <h5>Succesful Launch</h5>
            { data.map((data, index) => (
              <li key={index + 1}><button>{String(data.launch_success)}</button></li>
            ))}
          </ul>

          <ul className="filter-list">
            <h5>Succesful Landing</h5>
            { data.map((data, index) => (
              <li key={index + 1}><button>{String(data.land_success)}</button></li>
            ))}
          </ul>
        </div>

        <div className="main">
          <div className="row">
            { data.map((data, index) => (
              <div className="card" key={index + 1}>
                <div className="card-img">
                  <img src={data.links.mission_patch_small} alt="" />
                </div>
                <div className="card-content">
                  <h1>{data.mission_name}: <span># {data.flight_number}</span></h1>
                  <h4>Mission Ids: <span>{data.mission_id.map((data, index) => [index > 0 && ', ', <i key={index + 1}>{data}</i> ])}</span></h4>
                  <h4>Launch Year <span>{data.launch_year}</span></h4>
                  <h4>Successful Launch <span>{String(data.launch_success)}</span></h4>
                  <h4>Successful Landing <span>{data.rocket.first_stage.cores.map((data) => data.land_success)}</span></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
