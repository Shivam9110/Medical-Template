import React,{useState} from 'react';

function Event() {
    const [ status,setStatus] =  useState(true);
  return (
    <div>
    {
        status? <h1> Hello </h1>: null
    }
      
      {/* <button onClick={()=> setStatus(false)}>Hide</button> */}
      {/* <button onClick={()=> setStatus(true)}>Show</button> */}
      <button onClick={()=> setStatus(!status)}>Toggles </button>
    </div>
  );
}

export default Event;

