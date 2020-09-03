import React, { useState } from 'react';

const ErrorsInfo = (props) => {

  return (
    <div className="error">
      {
        props.data.length === 0 ? (
          <h1>Result not found</h1>
        ):
        <h1>
        <span>
          Limit: <i>{props.state.limit}</i>, 
          Year Data: <i>{props.state.year}</i>, 
          Succesful Launch: <i>{String(props.state.launchSuccess)}</i>, 
          Succesful Landing: <i>{String(props.state.landSuccess)}</i>,
          Count: {props.data.length}
        </span>
      </h1>
      }
    </div>
  )
}

export default ErrorsInfo;