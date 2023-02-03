import React from "react";

function Para(props){
    console.log(props.somedata)

    return <><p> this is my worlf
     {props.somedata}</p>
    <p> how the josh</p></>
}

export default Para;