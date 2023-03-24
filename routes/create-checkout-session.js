
const express = require('express');
const router  = express.Router();
const stripe = require('stripe')('sk_test_KXBhhgIBkzFS1qJikhfQBTnA');

let stripeSession;

router.post('/create-checkout-session', async (req, res) => {

  console.log('req received')

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1Mmo7vG7BCJsiOtcKbGmppXL',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:8000/`,
    cancel_url: `http://localhost:8000/`,
  });

 stripeSession = session
})

router.get('/checkout-url', (req, res) => {

  res.json({stripeSession})

})

module.exports = router;







