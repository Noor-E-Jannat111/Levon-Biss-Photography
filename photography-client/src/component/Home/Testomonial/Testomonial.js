import React, { useEffect } from 'react';
import './Testomonial.css'
import userOne from '../../../images/photo-1612230337141-903f3d330055.jpg'
import userTwo from '../../../images/4.jpg'
import userThree from '../../../images/1212122.jpg'
import TestomonialSection from '../TestomonialSection/TestomonialSection';

const Testomonial = () => {
    const [testimonial, setTestimonial] = React.useState([])

    useEffect(() => {

        fetch("http://localhost:9000/addReview")
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <section className="testomonial-section">
            <div className="container">


                <div className="slider-part">
                    <div className="the-service-hading text-center py-5 ">

                        <h1>Here Our  <span>Testimonials</span></h1>

                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="visibility active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    {
                                        testimonial.map(testimonial => <TestomonialSection testimonial={testimonial}></TestomonialSection>)
                                    }
                                </div>
                            </div>
                           
                        </div>
                        <button class="carousel-control-prev visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon visibility" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next visibility" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon visibility" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Testomonial;