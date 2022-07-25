const {
  getProducts,
  getProductsByCategory,
  getProductsByName,
} = require("../models/querys");

// get products in offer
// gets only first 8 products ordered by DESC
exports.getAllOffers = async (req, res) => {
  // call method from models querys.js
  const products = await getProducts();
  const offers = products
    // filter products by discount
    .filter((product) => product.discount > 0)
    // order by discount DESC
    .sort((a, b) => b.discount - a.discount)
    // get first 8 products
    .slice(0, 8);
  return res.json(offers);
};

exports.getAllProducts = async (req, res) => {
  // call method from models querys.js
  const products = await getProducts();
  return res.json(products);
};

exports.getProductsByCategory = async (req, res) => {
  // call method from models querys.js
  const products = await getProductsByCategory(req.params.category);
  return res.json(products);
};

exports.getProductsByName = async (req, res) => {
  // call method from models querys.js
  const products = await getProductsByName(req.params.name);
  return res.json(products);
};
