import React from 'react';

const Third = () => {
    return (
        <div>

            <div className="row" id="treatment">
                <div className="col-sm-6">
                    <div>
                        <img className="facepic2" src="images/face2.jpg" alt="no image" />
                    </div>

                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className='medicalcheckup'>
                                <div>
                                    <img className="stethoscope" src="images/stethoscope.png" alt="no image" />
                                </div>
                                <div>
                                    <h2>Medical check-up</h2>
                                    <p>Get advise from doctor for all your skin,
                                        hair and allergy related problems.</p>
                                </div>
                                

                            </div>

                        </div>

                        <div className="col-sm-6">
                            <div className='Alsoprovides'>
                                <div>
                                    <img className="Himage" src="images/H image.jpg" alt="no image" />
                                </div>
                                <div className='' style={{ float: "left" }}>
                                    <h2>Also Provide solutions for</h2>
                                    <p>Stretch Marks removal, White Spots, wrinkles,
                                        Skin Rejuvenation, Under Eye Dark Circles</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-6">
                            <div className='skin'>
                                <div>
                                    <img className="Equipment2" src="images/euipment.jpg" alt="no image" />
                                </div>
                                <div>
                                    <h2>Skin Treatments</h2>
                                    <p>Acne (pimples), Scars, Skin Whitening (detanning),
                                        Advanced Peels, Platelet rich plasma therapy</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-6">
                            <div className='other'>
                                <div>
                                    <img className="plus" src="images/plus.jpg" alt="no image" />
                                </div>
                                <div>
                                    <h2>Other Treatments</h2>
                                    <p>Hair Loss, Anti Ageing, Botox and Fillers,
                                        Skin Tags, Moles, Allergy</p>
                                </div>
                            </div>


                        </div>




                    </div>


                </div>

            </div>
        </div>

    );
}

export default Third;
