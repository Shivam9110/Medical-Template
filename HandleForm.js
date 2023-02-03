import React, { useState } from 'react';

function HandleForm() {
    // const [name,setName]=useState("");
    // const [tnc,setTnc]=useState(false);
    // const [interest,setInterest]=useState("");
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    });

    const HandleChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
    return (
        <div>
            <h1>Handle form</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="fname" placeholder='Enter your fname'
                    onChange={HandleChange}></input> <br /> <br />
                <input type="text" name="lname" placeholder='Enter your lname'
                    onChange={HandleChange}></input> <br /> <br />
                <input type="email" name="email" placeholder='Enter your email'
                    onChange={HandleChange}></input> <br /> <br />
                <input type="number" name="number" placeholder='Enter your number'
                    onChange={HandleChange}></input> <br /> <br />
                {/* <select onChange={(e)=> setInterest(e.target.value)}>
            <option>game</option>
            <option>cricket</option>
            <option>hockey</option>
        </select><br></br><br></br> */}
                {/* <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
                <span> Accept the condition </span> */}
                <br></br><br></br>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default HandleForm;
