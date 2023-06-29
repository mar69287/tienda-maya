const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
    productId: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    qty: { type: Number, default: 1 },
  }, {
    timestamps: true,
});

const orderSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    total: {
        type: Number,
        default: 0,
    },
    lineItems: [lineItemSchema],
    
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('Order', orderSchema);
