import React from 'react';

function Student(props) {
    // console.log(props.name);
    const {name,email,other}=props
  return (
    <div style = {{backgroundColor: "orange",margin:20}}>
      <h1>Name: {name}</h1>
    
      <h3>Email : {email}</h3>
      <h5>Detail : {other.address},{other.mob},{other.pincode}</h5>
    </div>
  );
}

export default Student;
