// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. http://localhost:3000/sum?a=1&b=2
// 3. http://localhost:3000/divide?a=1&b=2
// 4. http://localhost:3000/subtract?a=1&b=2

// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)
// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)

const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log('Requests is been listening on Port 3000');
});

app.get('/multiply', (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.status(200).send(a * b);
});

app.get('/sum', (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.status(200).send(a + b);
});

app.get('/divide', (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.status(200).send(a / b);
});

app.get('/subtract', (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  res.status(200).send(a - b);
});
