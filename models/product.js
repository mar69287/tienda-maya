const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    details: [{
        type: String
    }],
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }}, {
        timestamps: true
    })

module.exports = mongoose.model('Product', productSchema);