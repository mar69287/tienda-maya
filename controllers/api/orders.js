const Order = require('../../models/order')
const Stripe = require('stripe');
require('dotenv').config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", null);

module.exports = {
    index,
    create
}

async function index(req, res) {
    const userId = req.user._id;
    const orders = await Order.find({ user: userId });
    res.json(orders);
}

async function create(req, res) {
  const { cartData, cartTotal, token={} } = req.body;
  const userId = req.user._id;
  const total = Number(cartTotal.toFixed(2));

  const lineItems = cartData.map(item => ({
    productId: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    qty: Number(item.quantity)
  }));

  const order = new Order({
    user: userId,
    total: total,
    lineItems
  });

  try {
    const { id: customerId } = await stripe.customers.create({
      email: token.email,
      source: token.id,
    }).catch(e => {
      console.log(e);
      return null;
    })

    if (!customerId) {
      res.status(500).json({ success: false });
      return;
    }

    const invoiceId = `${token.email}-${Math.random().toString()}-${Date.now().toString()}`;

    const charge = await stripe.charges.create({
      amount: total * 100,
      currency: "USD",
      customer: customerId,
      receipt_email: token.email,
      description: "Tienda Maya Payment",
    }, { idempotencyKey: invoiceId }).catch(e => {
      console.log(e);
      return null;
    });

    if (!charge) {
      res.status(500).json({ success: false });
      return;
    };

    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}


