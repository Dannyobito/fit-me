import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51OICdBFqixAtM5tXpJiZeJBYHhb5mJGv1OzSostXHUaqW6vzTPhvXS5HRFTgHrpfR0pDdtDimgeCowKvaTsROVgj00pBo3DhJ9'
  return (
    <StripeCheckout 
        label='Pay Now'
        name='Fit-me'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={stripePrice}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
  )
}

export default StripeButton