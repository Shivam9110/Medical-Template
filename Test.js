import React from "react";
import { useNavigate } from 'react-router-dom';


function Test() {
    const ThisNameCanBeAnyThing = useNavigate();
    return (

        <>

            <div>
                <div className="container-fluid header_main" >
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="header_time">10:00 AM to 01:00 PM, 04:30 PM to 08:30 PM (All days)</h6>

                        </div>
                        <div className="col-sm-6">
                            <h6 className="header_contact"
                            onClick={(e)=>ThisNameCanBeAnyThing("/shivamsingh")}
                            >Call at +91 1111111111, +91 999999999  For Appointments</h6>


                        </div>

                    </div>

                </div>
            </div>
            <div>
                <ul className="header_image">
                    <li><img className="photo m-3" src="images/tooth2.jpg" alt="no image"></img></li>
                </ul>
                <ul className="header_nav_right">
                    <li> <a href="#Homes"> Home</a></li>
                    <li> <a href="#About_us"> About us</a></li>
                    <li> <a href="#treatment"> treatment</a></li>
                    <li> <a href="#ser_vice"> service</a></li>
                    <li> <a href="#location"> location</a></li>
                    <li> <a href="#login"> login</a></li>
                </ul>
            </div>
            <div>
                <img className="facepic" src="images/face.jpg" alt="no image" />
            </div>
        </>

    )
}



export default Test;
