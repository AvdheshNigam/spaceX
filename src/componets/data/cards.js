import React from 'react';

const Data = (props) => {
  return (
    <div className="row">
      {
        props.data.map((data, index) => (
          <div className="card" key={index + 1}>
            <div className="card-img">
              <img src={data.links.mission_patch_small} alt="" />
            </div>
            <div className="card-content">
              <h1>{data.mission_name}: <span># {data.flight_number}</span></h1>
              <h4>Mission Ids: <span>{data.mission_id.map((data, index) => [index > 0 && ', ', <i key={index + 1}>{data}</i> ])}</span></h4>
              <h4>Launch Year <span>{data.launch_year}</span></h4>
              <h4>Successful Launch <span>{String(data.launch_success)}</span></h4>
              <h4>Successful Landing <span>{String(data.rocket.first_stage.cores.map((data) => data.land_success))}</span></h4>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Data;




