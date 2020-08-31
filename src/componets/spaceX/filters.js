import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filters = () => {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    loadData();
  },[]);

  const loadData = async () => {
    await axios.get('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res => {
      // console.log(res.data);
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

const array = [1,3,3,2,5,5];
const unique = new Set(data);
console.log(unique)

  return (
    <div>
      
      <ul className="filter-list">
        <h5>Launch Year</h5>
        { data.map((data, index) => (
          <li key={index + 1}><button>{data.launch_year}</button></li>
        ))}
      </ul>
      
      {/* <ul className="filter-list">
        <h5>Successful Launch</h5>
        <li><button>2006</button></li>
      </ul>

      <ul className="filter-list">
        <h5>Successful Landing</h5>
        <li><button>2006</button></li>
      </ul> */}

    </div>
  )
}

export default Filters;