import React from 'react';
import './Professional.css'
import images from '../../../images/ge2.jpg'
const Professional = () => {
    return (
        <section className='Professional-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="pro-img-section">
                            <img src={images} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="professional-topic">
                            <div className="topic">
                                <h3>Let Us Handle Your Screen <span>Professional</span></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat temporibus assumenda consequatur harum, minima possimus autem perferendis, aperiam unde tenetur fugit numquam repellendus impedit nulla.</p>
                            </div>

                            <div className="user-part d-flex">
                                <div className="customer ">
                                    <h1>500+</h1>
                                    <p>Happy Customer</p>
                                </div>

                                <div className="customer">
                                    <h1>16+</h1>
                                    <p>Total Service</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professional;