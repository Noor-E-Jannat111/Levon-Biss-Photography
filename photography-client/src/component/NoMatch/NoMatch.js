import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div>
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                
                <h3><Link to="/home">Back to Home</Link></h3>
            </div>
        </div>
    );
};

export default NoMatch;