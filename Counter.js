import React,{useState,useEffect} from 'react';


function Counter(props) {
    const[ count, setCount] = useState(0);
    const[ data, setData] = useState(20);
useEffect(() => {
    alert("useEffect" +count)
}, [count])



  return (
    <div>
    <h1>Hello : {count}</h1>
      <h1>Hii : {data}</h1>
      <button onClick={()=> setCount(count+1)}>Add </button>
      <button onClick={()=> setData(data-1)}> Minus </button>
    </div>
  );
}

export default Counter;
