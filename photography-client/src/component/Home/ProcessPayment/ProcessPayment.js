import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie2LXGRZTsNBqteqp3vYZDFCgdpDvqKHsUkosb2ETsYxQW5uzXroOco4Z9uf8ttW6E0HDW4MdTCMCJQdNzwEOdA00pvJbs7Dx');



const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>

            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;
