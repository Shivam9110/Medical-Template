import React,{useContext} from 'react';
import { data, data1,data2 } from './ChildA'

const ChildC = () => {
    const Name = useContext(data);
    const age= useContext(data1);
    const address= useContext(data2);
    return (
        <div>
            <h1>Hi my name is {Name} and age is {age} and location is {address}</h1>
        </div>
    );
}

export default ChildC;
