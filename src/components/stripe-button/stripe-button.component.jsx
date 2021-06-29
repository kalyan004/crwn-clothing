import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51J7gdLSCffJGMttXiVUv6po8QPkZ24cftinn0J8zSg9lvY6V3WBzinyzh242ahI1YNfpqgLax7rceSaEKDZ0gxeg00jxZWFtPR'
    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }
    return (
        <StripeCheckout
            label ='Pay Now'
            name ='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel ='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;