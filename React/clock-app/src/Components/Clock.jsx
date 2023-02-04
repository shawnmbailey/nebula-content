import React from 'react';
import { useLoaderData } from 'react-router-dom';


function Clock(props) {
  const {params} = useLoaderData();
  return (
    <div>
      <h1>{props.time}</h1>
    </div>
  );
}

export default Clock;