// Import necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store for properties
let properties = [
  {
    id: 1,
    name: 'Green Villa',
    location: 'California',
    price: 500000,
    type: 'House'
  },
  {
    id: 2,
    name: 'Sunny Apartment',
    location: 'New York',
    price: 350000,
    type: 'Apartment'
  }
];

// GET all properties
app.get('/properties', (req, res) => {
  res.json(properties);
});

// GET a specific property by ID
app.get('/properties/:id', (req, res) => {
  const property = properties.find(p => p.id === parseInt(req.params.id));
  if (!property) {
    return res.status(404).send('Property not found');
  }
  res.json(property);
});

// POST a new property
app.post('/properties', (req, res) => {
  const { name, location, price, type } = req.body;

  // Simple validation
  if (!name || !location || !price || !type) {
    return res.status(400).send('Missing required fields');
  }

  const newProperty = {
    id: properties.length + 1,
    name,
    location,
    price,
    type
  };

  properties.push(newProperty);
  res.status(201).json(newProperty);
});

// PUT update an existing property by ID
app.put('/properties/:id', (req, res) => {
  const property = properties.find(p => p.id === parseInt(req.params.id));
  if (!property) {
    return res.status(404).send('Property not found');
  }

  const { name, location, price, type } = req.body;
  property.name = name || property.name;
  property.location = location || property.location;
  property.price = price || property.price;
  property.type = type || property.type;

  res.json(property);
});

// DELETE a property by ID
app.delete('/properties/:id', (req, res) => {
  const propertyIndex = properties.findIndex(p => p.id === parseInt(req.params.id));
  if (propertyIndex === -1) {
    return res.status(404).send('Property not found');
  }

  properties.splice(propertyIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
