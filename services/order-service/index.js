const express = require('express');
const app = express();

app.use(express.json());

let orders = [];

// Create order
app.post('/orders', (req, res) => {
  const order = {
    id: orders.length + 1,
    userId: req.body.userId,
    item: req.body.item
  };
  orders.push(order);
  res.status(201).json(order);
});

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});