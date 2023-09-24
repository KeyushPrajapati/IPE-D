const express = require('express');
const app = express();
const products = [
  { 'id': 1, 'name': 'abc', 'des': 'xyz', 'price': 200 },
  { 'id': 2, 'name': 'xyz', 'des': 'qee', 'price': 400 },
  { 'id': 3, 'name': 'pqr', 'des': 'yuq', 'price': 300 }
];

app.get('/', (req, res) => {
  res.set('content-type', 'text/html');
  res.send('<h1>Welcome</h1>');
});

app.get('/product', (req, res) => {
  res.set('content-type', 'text/html');
  for (const product of products) {
    res.write(`<div><h1>Name: ${product.name}</h1><h2>Description: ${product.des}</h2><h2>Price: ${product.price}</h2><a href='/product/${product.id}'>Details</a></div>`);
  }
  res.end();
});

app.get('/product/:id', (req, res) => {
  res.set('content-type', 'text/html');
  const id = req.params.id;
  const data = products.find((p) => p.id == id);

  if (data) {
    res.write(`<div><h1>Name: ${data.name}</h1><h2>Description: ${data.des}</h2><h2>Price: ${data.price}</h2></div> <a href='/product'>Back</a>`);
  } else {
    res.status(404).send('<h1>404 - Not Found</h1>');
  }

  res.end();
});

// Handle 404 errors by displaying a custom error page
app.use((req, res) => {
  res.status(404).send('<h1>404 - Not Found</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
