const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('response for GET request');
});

const products = [
   { id: 1, name: 'Product 1', brand: 'Brand A'},
   { id: 2, name: 'Product 2', brand: 'Brand B'},
   { id: 3, name: 'Product 3', brand: 'Brand C'}
]

app.get('/products/brand/:brand', (req, res) => {
   const { brand } = req.params;
   const filteredProducts = products.filter(product => product.brand === brand);
   res.json(filteredProducts);
});

app.get('/products/id/:id', (req, res) => {
   const { id } = req.params;
   const filteredProducts = products.filter(product => product.id === parseInt(id, 10));
   res.json(filteredProducts);
});

const PORT = 3000;
app.listen(PORT, 
   () => console.log(`server start at http://localhost:${PORT}/`));