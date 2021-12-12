const router = require("express").Router();

// This is your test secret API key.
const stripe = require("stripe")('sk_test_51K5rplFxwKKTQ3RSs8FBDV5JbvGJGzHGUp4cc9WtsczoCv93gJG334GKe9aVtzCtNCIS3uukLkbTcDXK8KSOkXgS00xVoywoXd');

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


module.exports = router;