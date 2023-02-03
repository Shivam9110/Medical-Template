 import React, {useState} from 'react';
import axios from 'axios';
const Postres = () => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function saveUser() {
        // console.log(userID,title,body);
        let data = { userId, title, body }
        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                // console.log("result" ,result); 
                result.json().then((resp) => {
                    console.log("resp", resp) 
                })
            })
    }

    return (
        <div>
            <h1>Post API using Axios</h1>
            <input type="text" value={userId} onChange={(e) => { setUserId(e.target.value) }} name="userId" /><br></br>
            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" /><br></br>
            <input type="text" value={body} onChange={(e) => { setBody(e.target.value) }} name="body" /><br></br>
            <button type="button" onClick={saveUser}>submit</button>
        </div>
    );
}
export default Postres;