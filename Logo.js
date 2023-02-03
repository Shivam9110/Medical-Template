import React from 'react';

const Logo = () => {
    return (
        <div>

            <div className="row  p-0 m-0" id="About_us">
                <div className="col-sm-3">
                    <div>
                        <img className="bluetick" src="images/blue tick.webp" alt="no image" />
                    </div>
                    <h4>Book an appointment</h4>
                    <p>Get advise from doctor for all your skin, hair and allergy related problems.</p>
                </div>
                <div className="col-sm-3">
                    <div>
                        <img className="navigation" src="images/navigation.jpg" alt="no image" />
                    </div>
                    <h4>Choose your Treatment</h4>
                    <p>Skin Whitening(De-tanning), advanced Peel, acne scars, acne(pimples),
                        platelet rich plasma therapy, Hair loss, White spots,
                        Streat Marks removal and many more..</p>
                </div>
                <div className="col-sm-3">
                    <div>
                        <img className="equipment" src="images/euipment.jpg" alt="no image" />
                    </div>
                    <h4>Choose your Treatment</h4>
                    <h5>Dr.john doe</h5>
                    <p>Cosmatic & Endodontic Surgeon</p>
                    <h5>Dr.john doe</h5>
                    <p>Facial Aesthetic Surgeon</p>
                </div>
                <div className="col-sm-3">
                    <div>
                        <img className="notepaid" src="images/notepad.jpg" alt="no image" />
                    </div>
                    <h4>Get diagnostic report</h4>
                    <p>Get diagnostic report and start treatment at the
                        same place under observation of skilled, trained,
                        expert and specialist doctor.</p>
                </div>

            </div>
            <br/>
            <br/>
            <div>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-6">
                            <div>
                                <h1>Need help now?</h1>
                                <p>Click on the right button to book an appointment</p>
                            </div>

                        </div>
                        <div className="col-sm-6 buttom">
                            <div>
                                <button className="buttomm">BOOK AN APPINTMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    );
}

export default Logo;
