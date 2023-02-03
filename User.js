
import React, { useRef } from "react";

function User() {
  // const [Data , setData] = useState("");
  // const[val, setVal] = useState("");

  const inputRef = useRef("")
  const inputRef2 = useRef("")
  function submitForm(e) {
    e.preventDefault()
    console.warn("How are you :", inputRef.current.value)
    console.warn("How are you :", inputRef2.current.value)

  }
  return (
    <div>
      <h1> Uncontrolled</h1>
      <div>

        {/* <input type = "text" value ={Data} onChange ={(e)=>setData(e.target.value)}/> */}
        {/* <input type = "text" value = {val} onChange = {(e)=>setVal(e.target.value)}/> */}
        {/* <h3>value{Data}</h3> */}
        {/* <h4> {val} </h4> */}

        <form onSubmit={submitForm}>
          <input ref={inputRef} type="text" /><br></br>
          <input ref={inputRef2} type="text" />
          <button>Submit</button>

        </form>

      </div>
    </div>
  );
}

export default User;



