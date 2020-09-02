import React, { useState, useEffect } from 'react';

const Filter = (props) => {

  return (
    <div>
    <h2>Filters</h2>
      <ul className="filter-list">
        <h5>Launch Year</h5>

        {
          [...years].map((data, index) => (
            <li key={index + 1}><button value={data} onClick={getValue}>{String(data)}</button></li>
          ))}
      </ul>

      <ul className="filter-list">
        <h5>Succesful Launch</h5>
        { [...launch].map((data, index) => (
          <li key={index + 1}><button value={data} onClick={getValue}>{String(data)}</button></li>
        ))}
      </ul>

      <ul className="filter-list">
        <h5>Succesful Landing</h5>
        { [...landing].map((data, index) => (
          <li key={index + 1}><button value={data} onClick={getValue}>{String(data)}</button></li>
        ))}
      </ul>
      
    </div>
  )
}

export default Filter;
