import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div className="the-heading-part py-4 d-flex align-content-end flex-wrap">
                        <h1>
                            The Levon Biss Photography
                              </h1>
                        <p>
                        Writing has never been more powerful than today: every day, we read, write, post, send, enjoy, dislike, share, like a steady stream of written text. Thus, learning how to present your work (also) in writing has become indispensable. <br />  
                             </p><br />
                        <button className="edit">Show More Our Gallery</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;