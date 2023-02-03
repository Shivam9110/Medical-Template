import React from 'react';

const Location = () => {
    return (
        <div className="">
            <div className="row" id="location">
                <div className="col-sm-3">
                    <h4 className='sameblue'> ABOUT DOCTOR</h4>
                    <h5 className='sameblue'>Dr.john doe</h5>
                    <p>Cosmatic & Endodontic Surgeon</p>
                    <h5 className='sameblue'>Dr.john doe</h5>
                    <p>Facial Aesthetic Surgeon</p>

                </div>
                <div className="col-sm-4">
                    <h4 className='sameblue'>CLINIC </h4>
                    <h6>Get Consultation (All Days)</h6>
                    <div className='clinictime'>
                        <div>
                            <img className="calendar" src="images/calendar.jpg" alt="no image" />
                        </div>

                        <p> 10:00 AM to 01:00 PM, 04:30 PM to 08:30 PM </p>
                    </div>
                    <div className='clinicnumber'>
                        <div>
                            <img className="call" src="images/call.png" alt="no image" />
                        </div>
                        <p>  +91 1111111111, +91 999999999   </p>
                    </div>
                    <div className='clinicmail'>
                        <div>
                            <img className="message" src="images/message.png" alt="no image" />
                        </div>
                        <p>maitretech@example.com</p>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div>
                        <h4 className='sameblue'>OUR LOCATION</h4>
                        <p>Maitretech Bhopal (M.P.)</p>
                        <h4 className='sameblue'>FOLLOW US</h4>
                    </div>
                    <div className='socialsitefollow'>
                        <img className="instagram" src="images/instagram.png" alt="no image" />
                        <img className="facebook" src="images/facebook.png" alt="no image" />
                        <img className="youtube" src="images/youtube.png" alt="no image" />
                        <img className="whatsap" src="images/whatsapp.jpg" alt="no image" />
                    </div>
                </div>

            </div>
            <div className='lastcolor'>

            </div>
            <div>
                <div className="row">
                    <div className="col-sm-3">
                        <p className='footer'> All rights reserved.</p>

                    </div>
                    <div className="col-sm-9">
                        <p className='footer'>Disclaimer: If you think, any of the content used in the
                            site belongs to you or should  not be used, please reach
                            out to me and we will have it removed ASAP.</p>


                    </div>

                </div>
            </div>

        </div>
    );
}

export default Location;
