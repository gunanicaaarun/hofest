const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require("cors")

const app = express();

//Middlewares
app.use(cors())
app.use(bodyParser.json());

// Define the calculator endpoints
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 - num2;
  res.json({ result });
});

app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 * num2;
  res.json({ result });
});

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    res.status(400).json({ error: 'Cannot divide by zero' });
  } else {
    const result = num1 / num2;
    res.json({ result });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Calculator API server running on port 3000, url: http://localhost:${PORT}`);
});
