import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpaceX = (props) => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014')
    .then(res => {
      // console.log(res);
      setData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })}

  return (
    <div className="row">
      { data.map((data, index) => (
        <div className="card" key={index + 1}>
          <div className="card-img">
            <img src={data.links.mission_patch_small} alt="" />
          </div>
          <div className="card-content">
            <h1>{data.mission_name}: <span># {data.flight_number}</span></h1>
            <h4>Mission Ids: <span>{data.mission_id}</span></h4>
            <h4>Launch Year <span>{data.launch_year}</span></h4>
            <h4>Successful Launch <span>{data.launch_success}</span></h4>
            <h4>Successful Landing <span>{data.launch_success}</span></h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpaceX;