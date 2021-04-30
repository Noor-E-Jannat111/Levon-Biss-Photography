import React from 'react';
import './TestomonialSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestomonialSection = ({ testimonial }) => {
    console.log(testimonial);
    return (
        <div className='col-lg-4'>
            <div className="card-container">
                <div className="user-img">
                    <div className="reviewer-img">
                        <img src={testimonial.imageURL} alt="" />
                    </div>
                    <div className="professional">
                        <h5>{testimonial.name}</h5>
                        <span>{testimonial.Cname}</span>
                    </div>

                </div>

                <div className="card-post">
                    <p>{testimonial.description}</p>
                </div>
                <div className="card-five-star">
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                </div>
            </div>
        </div>
    );
};

export default TestomonialSection;