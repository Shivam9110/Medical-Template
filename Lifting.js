import React from 'react';

function Lifting(props) {
    const data= "shiv"
  return (
    <div>
      <h1>lifting component</h1>
      <button onClick={ ()=>props.alert(data)}>click me</button>
    </div>
  );
}

export default Lifting;
