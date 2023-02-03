import React from 'react';
import { createContext } from 'react';
import ChildB from './ChildB';
const data = createContext();
const data1 = createContext();
const data2 = createContext();
const ChildA = () => {
    const name = "Lucky singh"
    const age = '25'
    const address = "Indore"
    return (
        <div>
            <data.Provider value={name}>
                <data1.Provider value={age}>
                <data2.Provider value ={address}>
                    < ChildB />
                    </data2.Provider>
                </data1.Provider>
            </data.Provider>
        </div>
    ); 
}

export default ChildA;
export { data, data1 ,data2 }