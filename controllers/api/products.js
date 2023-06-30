const Product = require('../../models/product')

module.exports = {
    index,
    getCategory,
    show,
    getSearch
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

async function show(req, res) {
  const productTitle = req.params.title
  try {
    const product = await Product.findOne({ title: productTitle });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
  // if (isNaN(productId)) {
  //   return res.status(400).send('Invalid product ID');
  // }
  // const product = await Product.findOne({id: productId});
  // res.json(product);
}

async function getSearch(req, res) {
  console.log('hello')
  const search = req.params.searchText;
  const regex = new RegExp(search, 'i'); // case-insensitive regex
  try {
    let products;
    if (search === '') {
      products = await Product.find();
    } else {
      products = await Product.find({
        $or: [
          { title: { $regex: regex } },
          { category: { $regex: regex } }
        ]
      });
    }
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
}