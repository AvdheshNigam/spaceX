import { useState, useEffect } from 'react';
import axios from 'axios';

import ValueContext from '../../App';

const Data = (props) => {

  const [data, setData] = useState([]);
  let launch = true;
  let land = true;
  let year = 2014;

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
    return [data];
}

export default Data;




