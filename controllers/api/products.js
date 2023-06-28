const Product = require('../../models/product')

module.exports = {
    index,
    getCategory,
}

async function index(req, res) {
    const products = await Product.find();
    res.json(products);
}

async function getCategory(req, res) {
    const category = req.params.category;
    try {
        const products = await Product.find({ category: category });
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
}