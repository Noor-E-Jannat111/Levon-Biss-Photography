import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-bg">
            <div className="container contact-content">
                <div className="row mb-5">
                    <div className="col-md-4 offset-md-1">
                        <h3>Let us handle your project, professionally.</h3>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <form action="">
                            <input type="email" name="" className="form-control" placeholder="Your Email Address" id="" />
                            <input type="text" name="" className="form-control my-4" placeholder="Your Name/Company's Name" id="" />
                            <textarea id="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                            <button className="btn btn-primary main-btn mb-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;