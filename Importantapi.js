import React, { useEffect, useState } from 'react';
import Items from './Items';
import axios from 'axios';
const Importantapi = () => {
    const [value,setValue]=useState(Items)
   function deleteUser(id){
    // axios( `http://localhost:3000/todo/${id}`, {
    //     method: "DELETE",
    //      }).then((result) => {
    //  result.json().then((resp) => {
    //         console.log( resp)
    //     })
    // })
    console.log(id,"id.....")
    const newValue=value.filter((item)=>item.id!==id)
    setValue(newValue)
   } 

    return (
        <>
        <h1> Delete Data </h1>
            <table border= "1">
                <tr>
                    <th>id</th>,
                    <th>name</th>,
                    <th>cate.</th>,
                    <th>price</th>,
                    <th>description</th>
                </tr>
                
                {
                    value.map((sdata,index) =>
                        <tr key={index}>
                            <td>{sdata.id}</td>
                            <td>{sdata.name}</td>
                            <td>{sdata.category}</td>
                            <td>{sdata.price}</td>
                            <td>{sdata.description}</td>
                            <td><button onClick={()=>deleteUser(sdata.id)}>Delete</button></td>

                        </tr>
                    )
                }
            </table>
        </>
    )

}

export default Importantapi;
