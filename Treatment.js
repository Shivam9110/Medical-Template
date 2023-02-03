import React from 'react';

const Treatment = () => {
    return (
        <div>
            <div className="treatment" id="ser_vice">
                <h1 className="">OUR TREATMENT</h1>
            </div>

            <div className="row">
                <div className="col-sm-3">
                    <div>
                        <img className="acne" src="images/Acne.jpeg" alt="no image" />
                    </div>
                    <h6 className="customizedacne">CUSTOMIZED ACNE TREATMENTS</h6>
                    <p>Acne Scar resurfacing, Fillers, Microdermabrasion (Skin Polishing)</p>
                </div>
                <div className="col-sm-3">
                    <div>
                        <img className="birth" src="images/Birth mark.jpeg" alt="no image" />
                    </div>
                    <h6 className="birthmark">BIRTH MARK</h6>
                    <p>Birth mark Treatment, Remove</p>
                </div>
                <div className="col-sm-3">
                    <div>
                        <img className="laser" src="images/Laser.jpeg" alt="no image" />
                    </div>
                    <h6 className="lasertreatment">LASER TREATMENTS</h6>
                    <p>Laser Photo Facial, Acne, Freckles</p>

                </div>
                <div className="col-sm-3">
                    <div>
                        <img className="various" src="images/various.jpeg" alt="no image" />
                    </div>
                    <h6 className="othertreatment">OTHER TREATMENTS</h6>
                    <p>Moles & Corn, Tatoo, Birth Marks</p>
                </div>

            </div>
        </div>

    );
}

export default Treatment;
