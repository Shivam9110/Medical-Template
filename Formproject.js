import React, { useState } from 'react';

const Formproject=()=> {
    const [from, setFrom] = useState("");
    console.log(from)
    return (
        
        <form>
            <div className='card'>
            <div className='form-group'>
                <h4 className='shipment'>Check pincode</h4>

                <h5>From</h5>
                <input type="number" className='form-control' id="name" autoComplete='off'
                    value={from} onChange={(e) => setFrom(e.target.value)}
                />

            </div>
            <div>
                <h5>To</h5>
                <input type="text" id="name" className='form-control' autoComplete='off' ></input>
            </div>
            <div>
                <h4 className='shipment'>Shipment Detail</h4>
                <br></br>
                <h5>Product Type</h5>
                <select id="cars">
                    <option>select product type...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>

            </div>
            <br></br>
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <h6 className='delivery'>Delivery Type</h6>
                        <select id="items">
                            <option>Delivery product type...</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <h6 className='weight'>Weight</h6>

                        <div className='d-flex'>
                            <div className='inpt_class'>
                                <input type="text" placeholder='678' id='texts'></input>

                            </div>
                            <div className='kg_class'>
                                (kg)
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <h4 className='shipment'>Want us to pack your Shipment?</h4>
                <br></br>
                <h5>Pick-up Date</h5>
                <input type="date" id="Date"></input>
            </div>
            <br></br>
            <div>
                <h5>Pickup Address</h5>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="text" id="text" placeholder='Enter your name' ></input>
                    </div>
                    <div className="col-sm-4">
                        <input type="number" id="numbers" placeholder='Enter mob.number' ></input>
                    </div>
                </div>
                <br></br>
                <div>
                    <input type="text" id="textss" placeholder='Search place'></input>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="text" id="text" placeholder='Enter city name'></input>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" id="state" placeholder='Enter state name'></input>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <h5>Delivery Address</h5>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="text" id="text" placeholder='Enter your name' ></input>
                    </div>
                    <div className="col-sm-4">
                        <input type="number" id="numbers" placeholder='Enter mob.number' ></input>
                    </div>
                </div>
                <br></br>
                <div>
                    <input type="text" id="textss" placeholder='Search place'></input>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-2">
                        <input type="text" id="text" placeholder='Enter city name'></input>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" id="state" placeholder='Enter state name'></input>
                    </div>
                </div>
            </div>
            <br></br>
            <input type="submit" value="confirm" id="submits"></input>
            <br></br>
            </div>

        </form>
    );
}

export default Formproject;
