import React, { useState } from 'react';

function HIgher() {

    return (
        <div>
            <h1 style={{ backgroundColor: "skyBlue", textAlign: 'center' }}>SHIVAM</h1>
            <marquee width="100%" height="40px">
                People will say something,Never Mind!,it is the job of People to say.
            </marquee>
            <HocOrange abp={Counters} />
            <HocYellow abp={Counters} />
            <HocBrown abp={Counters} />

        </div>
    );
}
function HocOrange(props) {
    return <h2 style={{ backgroundColor: "orange", textAlign: 'center' }}><props.abp /></h2>
}
function HocYellow(props) {
    return <h2 style={{ backgroundColor: "yellow", textAlign: 'center' }}><props.abp /></h2>
}
function HocBrown(props) {
    return <h2 style={{ backgroundColor: "brown", textAlign: 'center' }}><props.abp /></h2>
}



function Counters() {
    const [unique, setUnique] = useState(0)
    return <div>

        <h1>{unique}</h1>
        <button onClick={() => setUnique(unique + 1)}>update</button>
    </div>
}

export default HIgher;
