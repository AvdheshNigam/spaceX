import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = (props) => {

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

    return [data];
}

export default Data;




