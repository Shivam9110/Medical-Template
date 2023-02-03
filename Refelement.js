import React,{useRef,useState} from 'react';

const Refelement = () => {
    const Element = useRef("");
    const[name,setName]= useState("shivam")
    // console.log(Element);
    function reset(){
        setName("")
        Element.current.focus();
    }
    function handleColor(){
        Element.current.style.color="red"
        Element.current.value="lucky"
    }
  return (
    <div>
      <h1> Learning useEffect</h1>
      <input  ref = {Element}type ="text" value= {name} onChange = {((e)=> setName(e.target.value))}/>
      <button onClick={reset}>Reset Button</button>
      <button onClick={handleColor}>color change</button>
    </div>
  );
}

export default Refelement;
