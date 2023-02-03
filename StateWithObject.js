 import React, { useState } from 'react';

function StateWithObject() {

    const [data, setData] = useState({ name: 'shiv', age: 25, email: 'shivam@123' ,address:"AAAA"})

    return (
        <div>
            <h1>State with object</h1>
            <marquee>Always try to give your 100%</marquee>
            <input type="text" placeholder='enter the name' value={data.name}
                onChange={((e) => setData({ ...data, name: e.target.value }))} />

            <input type="text" placeholder='enter the age' value={data.age}
                onChange={((e) => setData({ ...data, age: e.target.value }))} />

            <input type="text" placeholder='enter the email' value={data.email}
                onChange={((e) => setData({ ...data, email: e.target.value }))} />

            <input type="text" placeholder='enter the address' value={data.address}
                onChange={((e) => setData({ ...data, address: e.target.value }))} />

            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
            <h3>{data.email}</h3>
            <h3>{data.address}</h3>

        </div>
    );
}

export default StateWithObject;
