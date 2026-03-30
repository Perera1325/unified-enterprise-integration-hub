const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Vinod" },
  { id: 2, name: "Sandil" }
];

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});