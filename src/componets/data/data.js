import React from 'react';

const Data = (props) => {
let index
  return (
    <div className="card" key={index + 1}>
      <div className="card-img">
        <img src={props.image} alt="" />
      </div>
      <div className="card-content">
        <h1>{props.fightName}: <span># {props.fightNumber}</span></h1>
        <h4>Mission Ids: <span>{props.missionID.map((data, index) => [index > 0 && ', ', <i key={index + 1}>{data}</i> ])}</span></h4>
        <h4>Launch Year <span>{props.launchYear}</span></h4>
        <h4>Successful Launch <span>{String(props.lauchSuccess)}</span></h4>
        <h4>Successful Landing <span>{String(props.cores.map((data) => data.land_success))}</span></h4>
      </div>
    </div>
  )
}

export default Data;




