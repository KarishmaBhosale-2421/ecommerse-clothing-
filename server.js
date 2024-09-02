const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

// Load products from JSON file
function loadProducts() {
  const data = fs.readFileSync(path.join(__dirname, 'products.json'));
  return JSON.parse(data);
}

// Route for searching products
app.get('/search', (req, res) => {
  const { query } = req.query;
  if (!query || query.length < 3) {
    return res.json([]);
  }

  const products = loadProducts();
  const results = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(results);
});

// Route for displaying all products
app.get('/products', (req, res) => {
  const products = loadProducts();
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
