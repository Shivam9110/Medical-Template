import React, { useState } from 'react';

const PreviouState = () => {
    const [count, setCount] = useState(0);
    function updateCounter() {
        let random = Math.floor(Math.random() * 10)
        setCount((pre) => {
            console.log(pre);
            if (pre < 5) {
                alert("low value")
            }
            else {
                return random
            }
            


        })
    
    // for(let i=0;i<5;i++)
    // {
    //     setCount((pre)=>pre+1)
    // }
}
    return (
        <div>
            <h1>Previous state</h1>
            <h2>{count}</h2>
            <button onClick={updateCounter}> click me </button>
        </div>
    );
}

export default PreviouState;
