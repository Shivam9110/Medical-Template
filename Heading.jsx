import axios from "axios";
import React, { useEffect, useState } from "react";

function Heading1() {
    const [count, setCount] = useState(0);



    useEffect(() => {
        // console.log("hello upper1")

        // axios start
        // let data = [{ name: "shivam" }]
        // setCount(data)
        // axios end
        console.log(count)

    } ,[]);

    return (
        <>
            <div>
                <div onClick={() => setCount(count + 1)}>Top Level {count}</div>

            </div>
            <h1>shivam sharma and shivam singh</h1>
            <h2 className="heading1"> real hero</h2>
        </>
    )
}

export default Heading1;
